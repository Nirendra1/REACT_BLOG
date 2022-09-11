module.exports.successResponse =(res,responseCode, responseMsg,data) => {
    res.status(responseCode).json({
        responseCode,
        responseMsg,
        data,
    })
} 

