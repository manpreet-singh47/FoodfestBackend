const express = require("express");
const purchasedProductModel = require("../Models/purchasedProduct");
const User = require("../Models/user");
require("dotenv").config();

const PurchasedProduct = async (req, res) => {
  const { products, totalPrice } = req.body;
  const id = req.params.id;

  try {
    const Order = await purchasedProductModel.create({
      user: id,
      products,
      totalPrice,
    });

    return res.status(201).json({ Order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const GetInvoice = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const data = await purchasedProductModel
      .findOne({ user: id })
      .populate("user");

    return res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { PurchasedProduct, GetInvoice };
