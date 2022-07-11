const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class Exercise {
  static async addExercise(user, data) {
    const query = `INSERT INTO  exercise (name, category, duration, intensity, user_id) VALUES ($1, $2, $3, $4, (SELECT FROM users WHERE users.email = $5)) RETURNING name, category, duration, intensity;`;

    const result = await db.query(query, [data.name, data.category, data.duration, data.intensity, user.email.toLowerCase()]);

    return result.rows[0];
  }

  static async listAllExercise(user) {
    const query = `SELECT name, category, duration, intensity FROM exercise WHERE user_id = (SELECT id FROM users WHERE users.email = $1) ORDER BY date_created ASC`;

    const result = await db.query(query, [user.email.toLowerCase()]);

    return result.rows;
  }
}

module.exports = Exercise;
