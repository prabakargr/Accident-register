var express=require('express');

var ARController=require('./AR.controller');

var arRouting=express.Router();


arRouting.route('/addAR').post(ARController.addAccidentRegister);
arRouting.route('/arLists').post(ARController.findArLists);


module.exports=arRouting;