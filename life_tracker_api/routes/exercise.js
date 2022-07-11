const express = require("express");
const Exercise = require("../models/exercise");
const router = express.Router();
const Exercise = require("../models/exercise");
// const { NotFoundError, BadRequestError } = require("../utils/errors");

router.post("/", async (req, res, next) => {
  try {
    const userExercise = await Exercise.addExercise(req.body);
    return res.status(200).json({ userExercise });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const userExercise = await Exercise.listAllExercise(req.body);
    return res.status(201).json({ userExercise });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
