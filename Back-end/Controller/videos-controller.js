const mongoose = require("mongoose");
const vedioModal = require("../models/vedio");
const { message } = require("../Heplers/ErrorMessage");
const { generalSuccessMessages } = require("../Heplers/SuccessMessage");
const { statusCode } = require("../Heplers/StatusCode");
const { successResponse } = require("../Heplers/SuccessResponse");
const { errorResponse } = require("../Heplers/ErrorResponse");

//addvedio
exports.addVedio = async (req, res) => {
  try {
    const addVedio = await new vedioModal({
      ...req.body,
      createdBy: mongoose.Types.ObjectId(req.user_id),
    });
    const SaveVedio = await addVedio.save();
    successResponse(
      res,
      statusCode.msg_save_code,
      generalSuccessMessages.UserCreatedSuccessfully,
      SaveVedio
    );
  } catch (err) {
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};
//getOneVedio
exports.fetchOne = async (req, res) => {
  try {
    const fetchVedio = await vedioModal.findOne(req.query.id);
    if (!fetchVedio) {
      return errorResponse(
        res,
        statusCode.exception_msg_code,
        message.ITEM_NOT_FOUND
      );
    }
    return successResponse(
      res,
      statusCode.msg_save_code,
      generalSuccessMessages.fetch_One_Record,
      fetchVedio
    );
  } catch (err) {
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};

//fetchAllvedio
exports.fetchAllVedio = async (req, res) => {
  try {

  } catch (err) {
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};

//fetchTopVedio
exports.fetchTopVedio = async (req, res) => {
  try {

  } catch (err) {
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};

//updateVedio
exports.updateVedio = async (req, res) => {
  try {
    const updateVedio = await vedioModal.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    successResponse(
      res,
      statusCode.msg_save_code,
      generalSuccessMessages.msg_update_text,
      updateVedio
    );
  } catch (err) {
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};
//delete one
exports.deleteOne = async (req, res) => {
  try {
    const deletevedio = await vedioModal.findByIdAndDelete(req.query.id);
    if (!deletevedio) {
       return errorResponse(res.statusCode.exception_msg_code, message.notfound_text);
    }

     return successResponse(
      res,
      statusCode.msg_save_code,
      generalSuccessMessages.msg_delete_text
    );
  } catch (err) {
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};
