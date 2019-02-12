var UserAdmin=require('./userAdmin.module');

var express     = require('express');

var app         = express();

var jwt    = require('jsonwebtoken');

var config = require('../config');

app.set('superSecret', config.secret);

var login=function(req,res){
      console.log(req.body)

    // find the user
    UserAdmin.findOne({
        username: req.body.username
      },
       function(err, user) {
        
        if (err) throw err;
    
        if (!user) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
    
          // check if password matches
          if (user.password != req.body.password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {
    
            // if user is found and password is right
            // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password
        const payload = {
          username:user.username,  
          
        };
        console.log(payload);
            var token = jwt.sign(payload, app.get('superSecret'),{
            expiresIn:1440
           
            });
            console.log(token);
            // return the information including token as JSON
            res.send({
              success: true,
              message: 'Enjoy your token!',
              token: token,
              user:user
            }).status(200);
          }   
    
        }
    
      });
  }

  module.exports={
    login:login
  }