var express=require('express');

var pdfController=require('./controller');

var tokenValidate=require('../tokenValidate/tokenValidation');

var downloadRouting=express.Router();

downloadRouting.route('/download').post(tokenValidate.checkToken,pdfController.arDownload)


module.exports=downloadRouting