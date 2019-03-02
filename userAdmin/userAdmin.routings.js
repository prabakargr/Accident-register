var express=require('express');

var usersController=require('./usersAdmin.controller');

var usersAdminRouting=express.Router();

var tokenGenerate=require('../tokenValidate/tokenGenerate')

usersAdminRouting.route('/login').post(tokenGenerate.adminlogin);


module.exports=usersAdminRouting;    