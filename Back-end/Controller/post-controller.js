const mongoose = require("mongoose");
const PostModal = require("../models/Post");
const comment = require("../models/comment");
const { message } = require("../Heplers/ErrorMessage");
const { generalSuccessMessages } = require("../Heplers/SuccessMessage");
const { statusCode } = require("../Heplers/StatusCode");
const { successResponse } = require("../Heplers/SuccessResponse");
const { errorResponse } = require("../Heplers/ErrorResponse");

// addonestory
exports.addOnePost = async (req, res) => {
  try {
    const postdata = await new PostModal({
      ...req.body,
      // createdBy: mongoose.Types.ObjectId(req.user_id),
    });
    const SavePOst = await postdata.save();
    successResponse(
      res,
      statusCode.msg_save_code,
      generalSuccessMessages.UserCreatedSuccessfully,
      SavePOst
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

// deleteOneStory
exports.deleteStory = async (req, res) => {
  try {
    const deleteStory = await PostModal.findByIdAndDelete(req.query.id);
    if (!deleteStory) {
      errorResponse(res.statusCode.exception_msg_code, message.notfound_text);
    }
    successResponse(
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

//updateStory
exports.UpdateStory = async (req, res) => {
  try {
    const updateStroy = await PostModal.findByIdAndUpdate(req.params.id, {
      $set: req.body
      //reg.query.id we can pass the id in params
    });
    successResponse(
      res,
      statusCode.msg_save_code,
      generalSuccessMessages.msg_update_text,
      updateStroy
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

//fatech one Story
exports.getOneStory = async (req, res) => {
  try {
    const item = await PostModal.findByIdAndUpdate(req.query.id, {
      $inc: { viewsCount: 1 },
    })
    // .populate("category", "title");
    if (item) {
      item.comments = await comment.find({ post: item._id });
      return res.status(200).json(item);
    }
    return res.status(404).json({
      message: "Item not found",
      success: false,
    });
  } catch (err) {
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};

//getTopStories
exports.TopStory = async (req, res) => {
  try {
    console.log("Params",req.params)
    console.log("Query",req.query)
    const topStory = await PostModal.find()
    .limit(req.query.limit)
    .sort({createdAt: 1 })
    .populate("createdBy")
      // .lean()
      // .exec();
    return res.status(201).json({
        lenth: topStory.length,
      data: topStory,

    });
  } catch (err) {
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};

//fetchAll Story
exports.fetchAll = async (req, res) => {
  try {
    const story = await PostModal.find()
    .limit(2)
    .sort({ createdAt: -1 });

    //   PostModal.aggregate([
    //     {
    //       $lookup: {
    //         from: "users",
    //         localField: "user_id",
    //         foreignField: "_id",
    //         as: "new record"
    //       }
    //     }])

    res.status(200).json({
      lenth: story.length,
      data: story,
    });

    // PostModal.aggregate([
    //     {
    //        "$match": {
    //                "$text": { "$search": "cake tea" }
    //     }
    //     },
    //     { "$sort": { "score": { "$meta": "textScore" } } },
    //     { "$limit": skip + limit },
    //     { "$skip": skip }
    // ])
  } catch (err) {
    console.log(err);
    errorResponse(
      res,
      statusCode.exception_msg_code,
      message.exception_msg_text,
      err
    );
  }
};


