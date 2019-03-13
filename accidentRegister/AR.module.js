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
        admissionDate:String,
        admissionTime:String,
        personBrought:String,
        isIformedToPolice:String,
        affidavit:String
    },
    patientDetails:{
        name:String,
        age:String,
        gender:String,
        occupation:String,
        identyMark1:String,
        location1:String,
        identyMark2:String,
        location2:String,
        doorNoStreet:String,
        phoneNumber:String,
        cityDistrict:String, 
    },
    doctorDetailsAndiInitialExamination:{
        doctorName:String,
        doctorRegistrationNumber:String,
        pulse:String,
        bloodPressureHigh:String,
        bloodPressureLow:String,
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
        accidentType:[],
        patientPosition:String,
        vechileType:String,
        patientType:String
    }
})


module.exports=mongoose.model('accidentRegister',arModel)