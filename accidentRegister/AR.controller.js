var ArModel = require('./AR.module');

var express = require('express');

var app = express();

var jwt = require('jsonwebtoken');

var config = require('../config');

var _ = require('lodash');

var status = require ('../statusResponse/status')

app.set('superSecret', config.secret);



var findArLists = function (req, res) {

    var body = {
        admissionDate: req.body.admissionDate,
    }
    var currentUserID = req.body.currentUserID

    let arLists = [];

    ArModel.find({ currentUserID }, function (err, lists) {
        if (lists.length !== 0) {
            console.log(lists);
            for (let i = 0; i < lists.length; i++) {
                console.log(lists[0].admissionDetails.admissionDate)
                if (lists[i].admissionDetails.admissionDate == body.admissionDate) {
                    arLists.push(lists[i]);
                    console.log(arLists)
                }
            }
            if (arLists.length === 0) {
                return res.json(status.statusCode.recordNotFound)
            }
            let Response=status.statusCode.getSuccess;
            Response.data=arLists
            return res.json(Response)

        } else {
            return res.json(status.statusCode.recordNotFound)
        }
    });
}

var addAccidentRegister = function (req, res) {
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
                    res.send({
                        res: result,
                        message: "Created successfully"
                    })
                }
            })


        }
    });
}

module.exports = {
    addAccidentRegister: addAccidentRegister,
    findArLists: findArLists
}