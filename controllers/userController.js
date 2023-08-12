const User = require("../models/userModel");

const addUSer = async (req, res) => {
  try {
    const user = new User({
      ...req.body,
    });
    await user.save();
    return res.status(201).json("user added successfully");
  } catch (error) {
    return res.status(500).json("something went wrong!!!");
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json("something went wrong!!!");
  }
};

module.exports = {
  getUser,
  addUSer,
};
