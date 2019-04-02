var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var arModel = new Schema({
    currentUserID: String,
    arNumber: String,
    completed: {
        type: Boolean,
        default: false
    },
    hospitalDetails: {
        hospitalId: String,
        hospitalNumber: String,
        district: String,
        hospitalType: String,
        hospitalDirectorate: String,
        hospitalName: String,

    },
    patientInformation: {
        name: String,
        age: String,
        gender: String,
        occupation: String,
        identyMark1: String,
        location1: String,
        identyMark2: String,
        location2: String,
        doorNoStreet: String,
        phoneNumber: String,
        cityDistrict: String,
        arrivalDate: String,
        arrivalTime: String,
        personBrought: String
    },
    mlcInformation: {
        isInformedToPolice: String,
        toWhom: String,
        location: String,
        landmark: String,
        caseType: String,
        patientType: String,
        vechileType: String,
        vechileNumber: String,
        patientPosition: String,
        isNeededDyingDeclaration: String,
        isNeededStatement: String
    },
    examinationDetails: {
        typeOfInjury: String,
        otherTypeOfInjury: String,
        natureOfInjury: String,
        injuredPartOfBody: String,
        heartRate: String,
        bloodPressureHigh: String,
        bloodPressureLow: String,
        conscious: String,
        orientation: String,
        descriptionOfPupil: String,
        physicianOpinion: String,
        history: String,
        treatmentPlan: String,
        outCome: String,
        referralInstitutionType: String,
        reasonforReferral: String

    },
})


module.exports = mongoose.model('accidentRegister', arModel)