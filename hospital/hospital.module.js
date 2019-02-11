var mongoose=require('mongoose');

var Schema=mongoose.Schema

var hospitalModel=new Schema({

    hospitalId:String,
    hospitalNumber:String,
    district:String,
    hospitalType:String,
    hospitalDirectorate:String,
    hospitalName:String,
    password:String

})

module.exports=mongoose.model('hospital',hospitalModel)