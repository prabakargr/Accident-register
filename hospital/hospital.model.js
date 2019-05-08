var mongoose=require('mongoose');

var Schema=mongoose.Schema

var hospitalModel=new Schema({
    username:String,
    hospitalId:String,
    hospitalDirectorate:String,
    hospitalNumber:String,
    district:String,
    hospitalType:String,
    hospitalName:String,
    password:String,
    role:String,
    isActive:Boolean

})

module.exports=mongoose.model('hospital',hospitalModel)