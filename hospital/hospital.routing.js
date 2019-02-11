var express=require('express');

var hospitalController=require('./hospital.controller');

var usersAdminRouting=express.Router();

usersAdminRouting.route('/addHospital').post(hospitalController.addHospital);
usersAdminRouting.route('/hospitalLogin').post(hospitalController.hospitalLogin);

module.exports=usersAdminRouting;