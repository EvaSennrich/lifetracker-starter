require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const SECRET_KEY = process.env.SECRET_KEY || "secret_dev";

function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "postgres";
  const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbName = process.env.DATABASE_NAME || "life_tracker";

  // if the DATABASE_URL environment variable, user that,
  // otherwise create the db connection string ourselves
  return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass} @${dbHost}:${dbPort}/${dbName}`;
}

const BCRYPT_WORK_FACTOR = 13;

console.log("Life Tracker Config: ".red);
console.log("Database URI:".blue, getDatabaseUri());
console.log("PORT:".blue, PORT);
console.log("SECRET KEY:".blue, SECRET_KEY);
console.log("----");

module.exports = {
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
  SECRET_KEY,
};
