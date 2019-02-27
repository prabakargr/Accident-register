var ArModel = require('./AR.module');

var express = require('express');

var app = express();

var jwt = require('jsonwebtoken');

var config = require('../config');

var _ = require('lodash');

app.set('superSecret', config.secret);

// var addAccidentRegister=function (req, res) {
//     var arModel = new ArModel(req.body);
//                 arModel.save(function (err,result) {
//                     if (err) res.send('error');
//                     else res.json({result:result,message:"Success"})
//                 })
//             }


var findArLists = function (req, res) {
    console.log(req.body)
    var token = req.headers['x-access-token'];
    console.log(token)



    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                // req.decoded = decoded;    
                // next();={}
                var body = {
                    admissionDate: req.body.admissionDate,
                }
                var currentUserID = req.body.currentUserID

                let arLists = [];

                // var admissionDate =req.body.admissionDate
                // var currentUserID=req.body.currentUserID 
                ArModel.find({ currentUserID }, function (err, lists) {
                    if (lists.length !== 0) {
                        console.log(lists);
                        for (let i = 0; i < lists.length; i++) {
                            console.log(lists[0].admissionDetails.admissionDate)
                            if (lists[i].admissionDetails.admissionDate == body.admissionDate) {
                                arLists.push(lists[i]);
                                console.log(arLists)
                                //  return res.json({
                                //      result:arLists,
                                //      message:'Success',
                                //  })
                            }
                        }
                        if (arLists.length === 0) {
                            return res.json({
                                message: 'No record Found',
                            })
                        }
                        return res.json({
                            result: arLists,
                            message: 'Success',
                        })

                    } else {
                        return res.json({
                            message: 'No records'
                        })
                    }
                });
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });


    };

};
var addAccidentRegister = function (req, res) {
    console.log(req.body)
    var token = req.headers['x-access-token'];

    console.log(token)

    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                // req.decoded = decoded;    
                // next();
                let query = {
                    currentUserID: req.body.currentUserID,
                    arNumber: req.body.arNumber
                }
                ArModel.findOne(query, function (err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        if (result && result.arNumber) {
                            result = _.extend(result, req.body)
                        } else {
                            result = new ArModel(req.body)
                        }

                        result.save((err, doc) => {
                            if (err) {
                                res.send(err)
                            } else {
                                const payload = {
                                    body: req.body,

                                };
                                console.log(payload);
                                var token = jwt.sign(payload, app.get('superSecret'), {
                                    expiresIn: 1440

                                });
                                res.send({
                                    res: result,
                                    token: token,
                                    message: "Created successfully"
                                })
                            }
                        })


                    }
                });
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });


    };

};

module.exports = {
    addAccidentRegister: addAccidentRegister,
    findArLists: findArLists
}