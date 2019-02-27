var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var arModel=new Schema({
    currentUserID:String,
    arNumber: String,
    completed: {
        type: Boolean,
        default: false
    },
    admissionDetails:{
        opNumber:String,
        ipNumber:String,
        mlcNumber:String,
        pinNumber:String,
        admissionDate:String,
        admissionTime:String,
        personBrought:String,
        isIformedToPolice:String,
        affidavit:String
    },
    patientDetails:{
        name:String,
        age:Number,
        gender:String,
        occupation:String,
        identyMark1:String,
        location1:String,
        identyMark2:String,
        location2:String,
        doorNoStreet:String,
        city:String,
        district:String, 
    },
    doctorDetailsAndiInitialExamination:{
        doctorName:String,
        doctorRegistrationNumber:String,
        pulse:String,
        bloodPressure:String,
        respirationRate:String,
        oxygenSaturation:String,
        pupillaryReaction:String,
        injuryType:String
    },
    accidentDetails:{
        location:String,
        landmark:String,
        accidentDate:String,
        accidentTime:String,
        accidentType:String,
        patientPosition:String,
        vechileType:String,
        patientType:String
    }
})


module.exports=mongoose.model('accidentRegister',arModel)