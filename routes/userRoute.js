const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

//create
router.post("/", async (req, resp) => {
  const { name, age, email } = req.body;
  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });

    resp.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    resp.status(400).json({
      error: error.message,
    });
  }
});

//show all data
router.get("/", async (req, resp) => {
  try {
    const showAll = await User.find();
    resp.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      error: error.message,
    });
  }

  // resp.send("runnig app");
});

//single data
router.get("/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const singleData = await User.findById({ _id: id });
    resp.status(200).json(singleData);
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      error: error.message,
    });
  }
});

//delete data
router.delete("/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const deleteData = await User.findByIdAndDelete({ _id: id });
    resp.status(200).json(deleteData);
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      error: error.message,
    });
  }
});

//patch or put
router.patch("/:id", async (req, resp) => {
  const { id } = req.params;
  // const { name, email, age } = req.body;
  try {
    const updateData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    resp.status(200).json(updateData);
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
