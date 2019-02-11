var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var userAdminModel=new Schema({
   
    username:String,
    password:String


});



module.exports=mongoose.model("alluser",userAdminModel);