const { sequelize, DataTypes, Model } = require("./db");

class MenuItem extends Model {}

MenuItem.init(
  {
    food_name: DataTypes.STRING,
    chef_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { MenuItem };
