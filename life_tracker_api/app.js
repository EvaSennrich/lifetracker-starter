const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const { BadRequestError, NotFoundError } = require("./utils/errors");
const authRoutes = require("./routes/auth");
// const User = require("./models/user");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({ error: { message, status } });
});

module.exports = app;
