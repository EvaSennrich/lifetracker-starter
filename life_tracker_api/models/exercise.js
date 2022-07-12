const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class Exercise {
  /**
   *
   * @param {*} user to access the user personal information as email
   * @param {*} data to access the users input values from the exercise table: name, category, duration and intensity
   * @returns an object with the new user inputted values
   */
  static async addExercise(user, data) {
    const query = `INSERT INTO  exercise (
      name, 
      category, 
      duration, 
      intensity, 
      user_id) 
      VALUES ($1, $2, $3, $4, (SELECT FROM users WHERE users.email = $5)) RETURNING name, category, duration, intensity;`;

    const result = await db.query(query, [data.name, data.category, data.duration, data.intensity, user.email.toLowerCase()]);

    return result.rows[0];
  }

  /**
   *
   * @param {*} user parameter to access the users email and its list of exercise
   * @returns an object of all the user inputted values on the past sorted by date created
   */

  static async listAllExercise(user) {
    const query = `SELECT name, category, duration, intensity FROM exercise WHERE user_id = (SELECT id FROM users WHERE users.email = $1) ORDER BY date_created ASC`;

    const result = await db.query(query, [user.email.toLowerCase()]);

    return result.rows;
  }
}

//  static async exerciseByID(exerciseById) {
//     const exercise = SELECT * FROM exercise WHERE
//       .get("products")
//       .find({ id: Number(productById) })
//       .value();
//     console.log("----->>", product);
//     return product;
//   }

module.exports = Exercise;
