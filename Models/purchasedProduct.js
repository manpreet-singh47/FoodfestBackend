const mongoose = require("mongoose");

const purchasedProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [],
  totalPrice: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
});

const PurchasedProduct = mongoose.model(
  "PurchasedProduct",
  purchasedProductSchema
);

module.exports = PurchasedProduct;
