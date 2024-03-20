class CustomError extends Error {
    constructor(errorMessage, statusCode){
        super(errorMessage) // the message property of the Error object (which is inherited by ErrorHandler from Error) will initialized
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
         // This line captures the stack trace when an instance of the ErrorHandler class is created. 
         //It helps in debugging by providing information about where the error occurred in the code.
    }
    
}

module.exports = CustomError