
var hospitalModel = require('../hospital/hospital.model');

var UserAdmin = require('../userAdmin/userAdmin.model')

var express = require('express');

var app = express();

var jwt = require('jsonwebtoken');

var config = require('../config');

var status = require('../statusResponse/status')

app.set('superSecret', config.secret);


// Hospital Login

var hospitalLogin = function (req, res) {
  if (!req.body.hospitalNumber || !req.body.password) {

    res.json(status.statusCode.missingParameters)
  } else {

    // find the user
    hospitalModel.findOne({
      hospitalNumber: req.body.hospitalNumber
    },
      function (err, hospital) {

        if (err) throw err;

        if (!hospital) {
          res.json(status.statusCode.userNotFound);
        } else if (hospital) {

          // check if password matches
          if (hospital.password != req.body.password) {
            res.json(status.statusCode.passwordWrong);
          } else if (hospital.isActive != true) {
            res.json(status.statusCode.hospitalStatus);
          } else {

            const payload = {
              hospitalNumber: hospital.hospitalNumber,

            };
            var token = jwt.sign(payload, app.get('superSecret'), {
              // expiresIn:1440

            });
            responce = status.statusCode.loginSuccess
            responce.data = hospital
            responce.token = token
            res.json(responce)
          }

        }

      });
  }


}


//Admin Login


var adminlogin = function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json(status.statusCode.missingParameters)
  } else {

    // find the user
    UserAdmin.findOne({
      username: req.body.username
    },
      function (err, user) {

        if (err) throw err;

        if (!user) {
          res.json(status.statusCode.userNotFound);
        } else if (user) {

          // check if password matches
          if (user.password != req.body.password) {
            res.json(status.statusCode.passwordWrong);
          } else {
            const payload = {
              username: user.username,

            };
            var token = jwt.sign(payload, app.get('superSecret'), {
              // expiresIn:1440

            });
            let responce = status.statusCode.loginSuccess
            responce.token = token
            responce.data = user
            res.json(responce)
          }

        }

      });
  }
}

module.exports = {
  hospitalLogin: hospitalLogin,
  adminlogin: adminlogin
}