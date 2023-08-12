const express = require("express");
const { addUSer, getUser } = require("../controllers/userController");
const router = express.Router();

router.post("/user", addUSer);
router.get("/user/:id", getUser);

module.exports = router;
