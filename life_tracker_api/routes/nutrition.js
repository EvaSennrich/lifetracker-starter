const express = require("express");
const Exercise = require("../models/exercise");
const router = express.Router();
const security = require("../middleware/security");
// const { createUserJwt } = require("../utils/tokens");
// const { NotFoundError, BadRequestError } = require("../utils/errors");

/**
 * endpoint for creating/ adding new exercise
 */
router.post("/create", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const exercise = await Exercise.addNutrition({ user, data: req.body });
    return res.status(201).json(exercise);
  } catch (err) {
    next(err);
  }
});

/**
 * list all exercise
 */
router.get("/", async (req, res, next) => {
  try {
    const { user } = res.locals;
    const exercises = await Exercise.listAllNutrition(user);
    return res.status(201).json(exercises);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
