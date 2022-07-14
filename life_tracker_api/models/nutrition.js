const db = require("../db");
const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");

class Nutrition {
  /**
   * create/add nutrition method
   * @param {*} user to access the user personal information as email
   * @param {*} data to access the users input values from the nutrition table
   * @returns an object with the new user inputted values
   */
  static async addNutrition({ user, data }) {
    const requiredFields = ["name", "category", "quantity", "calories", "image_url"];
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
        image_url,
        user_id
      )
      VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE users.email = $6))
      RETURNING id,
                name,
                category,
                quantity,
                calories,
                image_url,
                created_at
    `,
      [data.name, data.category, data.quantity, data.calories, data.image_url, user.email]
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
    SELECT name, category, quantity, calories, image_url
    FROM nutrition
    WHERE user_id = (SELECT id FROM users WHERE users.email = $1) 
    ORDER BY created_at ASC
    `;

    const result = await db.query(query, [user.email]);

    return result.rows;
  }
}

module.exports = Nutrition;
