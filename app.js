var express=require('express');

var mongoose=require('mongoose');

var path = require("path");

var bodyParser=require('body-parser');

var jwt = require('jsonwebtoken');

var morgan = require('morgan');

var cors=require('cors')

var db=mongoose.connect("mongodb://test:testar1@ds133875.mlab.com:33875/accident_register")

var usersAdminRouting = require('./userAdmin/userAdmin.routings');

var hospitalRouting=require('./hospital/hospital.routing');

var arRouting=require('./accidentRegister/AR.routing')

var config = require('./config');

var app=express();

app.set('superSecret', config.secret);

app.use(function (req, res, next) {
    res.setHeader('X-Powered-By', 'IITM')
    next()
  })

process.env.PWD = process.cwd();

// app.set('views', path.join(process.env.PWD, 'public'));

// app.use('/swagger',express.static(path.join(process.env.PWD, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    next();
});

app.use('/api/v1/adminUsers',usersAdminRouting);
app.use('/api/v1/hospitals',hospitalRouting);
app.use('/api/v1/accidentRegisters',arRouting);


var port=process.env.PORT || (4000);

app.listen(port, () => console.log(`Running on localhost:4000`));
