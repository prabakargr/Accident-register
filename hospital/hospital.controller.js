var hospitalModel=require('./hospital.module');

var express     = require('express');

var app         = express();

var jwt    = require('jsonwebtoken');

var config = require('../config');

var tokenValidate=require('../tokenValidate/tokenValidation')

var status=require('../statusResponse/status')

app.set('superSecret', config.secret);

var addHospital = function (req, res) {
                var hospital = new hospitalModel(req.body);
                hospital.save(function (err,result) {
                    if (err) {
                        res.send(err);
                    } else {
                        let responce=status.statusCode.createSuccess
                        responce.data=result
                        res.json(responce)
                        
                    }
                });
            }



findHospitals=function(req,res){
  var district=req.body.district;

  hospitalModel.find({district},function(err,hospitals){
    if(hospitals.length!=0){
      res.json({data:hospitals,status:"Success",code:200})
    }else{
      res.json({status:"Hospitals Not Found",code:403})
    }
  })

}

findHospitalList=function(req,res){
              var district=req.body.district;
              var hospitalDirectorate=req.body.hospitalDirectorate
              hospitalModel.find({district,hospitalDirectorate},function (err,result) {
                  if (err) {
                      res.send(err);
                  } else {
                      let responce=status.statusCode.getSuccess
                      responce.data=result
                      res.send(responce)
                      
                  }
              });
          }


getAllHospitals=function(req,res){

              hospitalModel.find(function (err,result) {
                  if (err) {
                      res.send('error');
                  } else {
                      res.send({
                         result:result,
                        message:"Success"
                      })
                      
                  }
              });
          }
 


activatAndDeactivate=function(req,res){
              var _id=req.body._id;
              var isActive=req.body.isActive
              hospitalModel.findByIdAndUpdate({_id},{isActive},function (err,result) {
                  if (err) {
                      res.send(err);
                  } else {
                      let responce=status.statusCode.updateSuccess;
                      res.send(responce)
                      
                  }
              });
          }



module.exports={
    addHospital:addHospital,
    findHospitals:findHospitals,
    findHospitalList:findHospitalList,
    getAllHospitals:getAllHospitals,
    activatAndDeactivate:activatAndDeactivate    
}