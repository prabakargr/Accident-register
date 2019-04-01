var UserAdmin=require('./userAdmin.model');

var express     = require('express');

var app         = express();

var jwt    = require('jsonwebtoken');

var config = require('../config');

app.set('superSecret', config.secret);



  module.exports={
  }