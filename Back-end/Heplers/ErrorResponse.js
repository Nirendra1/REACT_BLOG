module.exports.errorResponse = (res,responseCode, responseMsg,error) => {
    res.status(responseCode).json({
        responseCode,
        responseMsg,
        error,
        
    })
} 
