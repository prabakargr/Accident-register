module.exports={
statusCode: {
        missingParameters: {
            statusCode: 400,
            status: "Missing parameters."
        },
        createSuccess: {
            status: "Success",
            code: 200
        },
        createFailed: {
            status: "Failed to create",
            code: 201
        },
        loginSuccess: {
            status: "Authentication Successfull",
            code: 200
        },
        loginFailed: {
            status: "Login Request Failed, Try again..",
            code: 201
        },
        invalidCredentials: {
            status: "Invalid Credentials, Try again..",
            code: 202
        },
        tokenNotValid: {
            code: 405,
            status: "Invalid Token"
        },
        entrySuccess: {
            status: "Entry Successfull",
            code: 200
        },
        entryFailure: {
            status: "Request Failed Try again..",
            code: 201
        },
        updateSuccess: {
            status: "Update Successfull",
            code: 200
        },
        updateFailure: {
            status: "Request to Update Failed, Try again..",
            code: 201
        },
        getSuccess: {
            status: "Getting Data Successfull",
            code: 200
        },
        getFailure: {
            status: "Error while getting data",
            code: 201
        },
        userNotFound:{
            status:"User not Found",
            code:201
        },
        passwordWrong:{
            status:'Authentication failed. Wrong password.',
            code:202
        },
        hospitalStatus:{
            status:'Authentication failed. Hospital Not in Active',
            code:201
        },
        recordNotFound:{
            status:'No records',
            code:201
        }
    }
}