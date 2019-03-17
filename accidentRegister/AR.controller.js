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
        if (lists && lists.length !== 0) {
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
    if(Array.isArray(req.body)){
        var reqArModel=req.body
       reqArModel.forEach(element => {
            const arModel = new ArModel(element);
             arModel.save(function(err,result){
                if(err) return status.statusCode.entryFailure
            })
    });
    let response=status.statusCode.entrySuccess
    res.send(response) 

    }else{
        console.log('entered')
        ArModel.findOne(query, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                if (result && result.arNumber) {
                    console.log('entered')
                    result = _.extend(result, req.body)
                } else {
                    console.log('newentered')
                    result = new ArModel(req.body)
                }
                console.log(result)
                result.save((err, doc) => {
                    if(doc){
                        if(doc.completed==false){
                         let response=status.statusCode.arInitialEntrySuccess
                          res.send(response)
                        }else if(doc.completed==true){
                         let  response = status.statusCode.arEntrySuccess
                           res.send(response)
                        }
                    }else {
                       let response = status.statusCode.createFailed
                        res.send(response)
                    }
                })
    
    
            }
        });
    }
}

module.exports = {
    addAccidentRegister: addAccidentRegister,
    findArLists: findArLists
}