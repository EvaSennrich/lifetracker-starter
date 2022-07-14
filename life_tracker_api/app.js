const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const { BadRequestError, NotFoundError } = require("./utils/errors");
const authRoutes = require("./routes/auth");
const exerciseRoutes = require("./routes/exercise");
const nutritionRoutes = require("./routes/nutrition");
const security = require("./middleware/security");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
/**
 * this middlewate checks for every request check if a token exists in the authorization header,
    if it does,attach the decoded user to the res.locals
 */
app.use(security.extractUserFromJwt);
app.use("/auth", authRoutes);
app.use("/exercise", exerciseRoutes);
app.use("/nutrition", nutritionRoutes);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({ error: { message, status } });
});

module.exports = app;
