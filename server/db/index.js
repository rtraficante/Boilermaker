const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/boiler",
  {
    logging: false,
  }
);

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { db, User };
