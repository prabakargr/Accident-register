var express=require('express');

var hospitalController=require('./hospital.controller');

var usersAdminRouting=express.Router();

usersAdminRouting.route('/addHospital').post(hospitalController.addHospital);
usersAdminRouting.route('/findHospitals').post(hospitalController.findHospitals);
usersAdminRouting.route('/hospitalLogin').post(hospitalController.hospitalLogin);
usersAdminRouting.route('/hospitalLists').post(hospitalController.findHospitalList);
usersAdminRouting.route('/activateDeactivate').post(hospitalController.activatAndDeactivate);
usersAdminRouting.route('/allHospitals').get(hospitalController.getAllHospitals);

module.exports=usersAdminRouting;