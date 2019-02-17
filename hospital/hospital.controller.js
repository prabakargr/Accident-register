var hospitalModel=require('./hospital.module');

var express     = require('express');

var app         = express();

var jwt    = require('jsonwebtoken');

var config = require('../config');

app.set('superSecret', config.secret);

var addHospital = function (req, res) {
    var token = req.headers['x-access-token'];

    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                // req.decoded = decoded;    
                // next();
                var hospital = new hospitalModel(req.body);
                hospital.save(function (err,result) {
                    if (err) {
                        res.send('error');
                    } else {
                        const payload = {
                            body:req.body,  
                            
                          };
                          console.log(payload);
                              var token = jwt.sign(payload, app.get('superSecret'),{
                              expiresIn:1440
                             
                              });
                        res.send({
                            res:result,
                            token:token
                        })
                        
                    }
                });
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });


    };

};

var hospitalLogin=function(req,res){
  console.log(req.body)
   // find the user
   hospitalModel.findOne({
    hospitalNumber: req.body.hospitalNumber
  },
   function(err, hospital) {
    
    if (err) throw err;

    if (!hospital) {
      res.json({ success: false, message: 'Authentication failed. Hospital not found.' });
    } else if (hospital) {

      // check if password matches
      if (hospital.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token with only our given payload
    // we don't want to pass in the entire user since that has the password
    const payload = {
      hospitalNumber:hospital.hospitalNumber,  
      
    };
    console.log(payload);
        var token = jwt.sign(payload, app.get('superSecret'),{
        expiresIn:1440
       
        });
        console.log(token);
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          res:hospital
        }).status(200);
      }   

    }

  });


}

findHospitals=function(req,res){
  var district=req.body.district;

  hospitalModel.find({district},function(err,hospitals){
    if(!err){
      res.json({result:hospitals,message:"Success"}).status(200)
    }else{
      res.json({message:"No record"}).status(403)
    }
  })

}



module.exports={
    addHospital:addHospital,
    hospitalLogin:hospitalLogin,
    findHospitals:findHospitals
}