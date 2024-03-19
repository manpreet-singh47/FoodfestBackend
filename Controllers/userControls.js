const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const purchasedProductModel = require("../Models/purchasedProduct");
require("dotenv").config();

const Create = async (req, res) => {
  const { name, number } = req.body;

  try {
    const user = await User.create({
      name,
      number,
    });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "22h",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
    });
    return res.status(201).json({ success: "User registerd", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const Logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 } && res.send("Logout success"));
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getData = async (req, res) => {
  try {
    const data = await purchasedProductModel.find().populate("user");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { Create, getData, Logout };
