const { sequelize, DataTypes, Model } = require("./db");

class Menu extends Model {}

Menu.init(
  {
    menu_name: DataTypes.STRING,
    age_req: DataTypes.BOOLEAN,
    time_served: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Menu };
