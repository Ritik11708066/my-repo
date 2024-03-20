const Product = require("../models/productModel");
const CustomError = require("../utils/errorHandler");

// creating a product -- admin route
module.exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "product created successfully",
      product,
    });
  } catch (err) {
    return next(err);
  }
};

// getting all products - public route
module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({
      success: true,
      message: "route is working fine",
      products,
    });
  } catch (err) {
    return next(err);
  }
};

// updating a product - admin route
module.exports.updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return next(new CustomError("Product not found", 404), req, res, next);
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // indicates that you want Mongoose to return the modified document rather than the original one.
      runValidators: true, // ells Mongoose to run the validators defined in the schema. This is useful for ensuring that the data meets the schema requirements.
      useFindAndModify: false,
    });
    res.status(201).json({
      success: true,
      message: "product updated successfully",
      product,
    });
  } catch (error) {
    return next(error);
  }
};

// deleting a product - admin route
module.exports.deleteProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return next(new CustomError("Product not found", 404), req, res, next);
    }
    await product.remove();
    res.status(201).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
};

// getting detail of single product
module.exports.getProductDetail = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product);
    if (!product) {
      return next(new CustomError("Product not found", 404), req, res, next);
    }
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    return next(error);
  }
};
