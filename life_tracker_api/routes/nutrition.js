const express = require("express");
const Nutrition = require("../models/nutrition");
const router = express.Router();
const security = require("../middleware/security");
// const { createUserJwt } = require("../utils/tokens");
// const { NotFoundError, BadRequestError } = require("../utils/errors");

/**
 * endpoint for creating/ adding new nutrition info
 */
router.post("/create", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const nutrition = await Nutrition.addNutrition({ user, data: req.body });
    return res.status(201).json(nutrition);
  } catch (err) {
    next(err);
  }
});

/**
 * list all nutrition info
 */
router.get("/", async (req, res, next) => {
  try {
    const { user } = res.locals;
    const nutritions = await Nutrition.listAllNutrition(user);
    return res.status(201).json(nutritions);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
