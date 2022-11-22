import asyncHandler from "../middlewares/async.js";
import User from "../model/userModel.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc      Get all Users
// @route     GET /api/v1/users
// @access    Public

export const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ success: true, data: users });
});

// @desc      Get all User
// @route     GET /api/v1/users/:id
// @access    Public

export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorResponse(`User not found`, 404));
  }
  res.status(200).json({ success: true, data: user });
});

// @desc      Update User
// @route     GET /api/v1/users/:id
// @access    Public

export const updateUser = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorResponse(`User was not found`, 404));
  }
  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({ success: true, data: user });
});

// @desc      Delete User
// @route     GET /api/v1/users/:id
// @access    Public

export const deleteUser = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorResponse(`User was not found`, 404));
  }
  user.remove();
  res.status(200).json({ success: true, data: {} });
});
