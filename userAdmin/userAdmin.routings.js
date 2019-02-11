var express=require('express');

var usersController=require('./usersAdmin.controller');

var usersAdminRouting=express.Router();

usersAdminRouting.route('/login').post(usersController.login);


module.exports=usersAdminRouting;    