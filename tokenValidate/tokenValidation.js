let jwt = require('jsonwebtoken');
const config = require('../config');
const resStatus=require('../statusResponse/status')

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  console.log(token);
  if (token.startsWith('Bearer')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
          if (err) {
            return res.json(resStatus.statusCode.tokenNotValid);
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        return res.json({
          success: false,
          message: 'Auth token is not supplied'
        });
      }
    };
    
    module.exports = {
      checkToken: checkToken
    }