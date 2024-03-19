const express = require("express");
const { Create, getData, Logout } = require("../Controllers/userControls");
const router = express.Router();

router.post("/createUser", Create);
router.get("/getData", getData);
router.post("/logout", Logout);

module.exports = router;
