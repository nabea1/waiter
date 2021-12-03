const { sequelize, DataTypes, Model } = require("./db");

class Waiter extends Model {}

Waiter.init(
  {
    name: waiter_name.STRING,
    salary: waiter_salary.INTEGER,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Waiter };
