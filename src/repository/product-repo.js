const products_model = require("../models/products-model");

const mainboard_model = require("../models/mainboard-model");
///products
const createNewProduct = async (payload) => {
  return await products_model.create(payload);
};

const findProducts = async (skip, limit, sort) => {
  return await products_model.find().skip(skip).limit(limit).exec().lean();
};

////mainboard
const createMainBoard = async (payload) => {
  return await mainboard_model.create(payload);
};

module.exports = {
  createNewProduct,
  createMainBoard,
};
