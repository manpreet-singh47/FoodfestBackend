const express = require("express");
const {
  PurchasedProduct,
  GetInvoice,
} = require("../Controllers/purchasedProductController");
const router = express.Router();

router.post("/submitPurchases/:id", PurchasedProduct);
router.get("/getInvoice/:id", GetInvoice);

module.exports = router;
