import mongoose from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getVideoComments = asyncHandler(async (req, res) => {
  //TODO: get all comments for a video
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  if (!videoId) {
  }
});

const addComment = asyncHandler(async (req, res) => {
  // TODO: add a comment to a video
  const { content, video } = req.body;
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(400, "Please Login first");
  }

  if (!content || !video) {
    throw new ApiError(400, "Content or video is required");
  }

  const savingComment = await Comment.create({
    content,
    video,
    owner: userId,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, savingComment, "Comment saved successfully"));
});

const updateComment = asyncHandler(async (req, res) => {
  // TODO: update a comment
});

const deleteComment = asyncHandler(async (req, res) => {
  // TODO: delete a comment
});

export { getVideoComments, addComment, updateComment, deleteComment };
