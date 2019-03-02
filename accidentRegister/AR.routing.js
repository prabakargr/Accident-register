var express=require('express');

var ARController=require('./AR.controller');

var validateToken=require('../tokenValidate/tokenValidation')

var arRouting=express.Router();


arRouting.route('/addAR').post(validateToken.checkToken,ARController.addAccidentRegister);
arRouting.route('/arLists').post(validateToken.checkToken,ARController.findArLists);


module.exports=arRouting;