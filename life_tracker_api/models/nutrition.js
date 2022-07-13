const db = require("../db");
const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");

class Exercise {
  /**
   * create/add exercise method
   * @param {*} user to access the user personal information as email
   * @param {*} data to access the users input values from the nutrition table: name, category, duration and intensity
   * @returns an object with the new user inputted values
   */
  static async addNutrition({ user, data }) {
    const requiredFields = ["name", "category", "duration", "intensity"];
    requiredFields.forEach((field) => {
      if (!data.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });
    const results = await db.query(
      `INSERT INTO nutrition (
        name,
        category,
        quantity,
        calories,
        user_id
      )
      VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE users.email = $5))
      RETURNING id,
                name,
                category,
                quantity,
                calories,
                created_at
    `,
      [data.name, data.category, data.quantity, data.calories, user.email]
    );
    return results.rows[0];
  }

  /**
   *
   * @param {*} user parameter to access the users email and its list of nutrition
   * @returns an object of all the user inputted values on the past sorted by date created
   */

  static async listAllNutrition(user) {
    const query = `
    SELECT name, category, quantity, calories
    FROM nutrition
    WHERE user_id = (SELECT id FROM users WHERE users.email = $1) 
    ORDER BY created_at ASC
    `;

    const result = await db.query(query, [user.email]);

    return result.rows;

    //   const results = await db.query(
    //     `
    //     SELECT name,
    //           category,
    //           duration,
    //           intensity,
    //           user_id
    //     FROM exercise
    //     ORDER BY date_created ASC
    //     JOIN users ON users.id = exercise.user_id
    //     `
    //   );
    //   return results.rows;
  }
}

module.exports = Exercise;
