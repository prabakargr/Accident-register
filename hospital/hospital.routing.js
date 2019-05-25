var express=require('express');

var hospitalController=require('./hospital.controller');

var tokenValidate=require('../tokenValidate/tokenValidation');

var tokenGenerate=require('../tokenValidate/tokenGenerate')

var usersAdminRouting=express.Router();

usersAdminRouting.route('/addHospital').post(tokenValidate.checkToken,hospitalController.addHospital);
// usersAdminRouting.route('/addHospital').post(hospitalController.addHospital);
usersAdminRouting.route('/findHospitals').post(hospitalController.findHospitals);
usersAdminRouting.route('/hospitalLogin').post(tokenGenerate.hospitalLogin);
usersAdminRouting.route('/hospitalLists').post(tokenValidate.checkToken,hospitalController.findHospitalList);
usersAdminRouting.route('/activateDeactivate').post(tokenValidate.checkToken,hospitalController.activatAndDeactivate);
usersAdminRouting.route('/allHospitals').get(tokenValidate.checkToken,hospitalController.getAllHospitals);

module.exports=usersAdminRouting;