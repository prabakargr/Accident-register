var arModel=require('./AR.module');

var addAccidentRegister=function (req, res) {
    console.log(req.body)
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
                var arModel = new arModel(req.body);
                arModel.save(function (err,result) {
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
                            token:token,
                            message:"Created successfully"
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

module.exports={
    addAccidentRegister:addAccidentRegister
}