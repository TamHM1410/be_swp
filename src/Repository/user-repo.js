const user = require("../models/user-model");

const getAllUser = async ({ limit, skip, sort }) => {
  return await user
    .find()
    .limit(limit)
    .skip(skip)
    .lean()
    .exec();
};
const findUserById = async (id) => {
  console.log(id)
  return await user.findById(id);
};
const updateUserById = async (id, data) => {
  return user.findByIdAndUpdate(id, data, { new: true })
};

module.exports = {
  getAllUser,
  findUserById,
  updateUserById,
};
