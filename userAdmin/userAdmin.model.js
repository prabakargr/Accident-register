var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var userAdminModel=new Schema({
   
    username:String,
    password:String,
    hospitalId:String,
    hospitalNumber:String,
    district:String,
    hospitalType:String,
    hospitalDirectorate:String,
    hospitalName:String,
    role:String,
    isActive:Boolean


});



module.exports=mongoose.model("adminuser",userAdminModel);