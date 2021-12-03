const { sequelize, DataTypes, Model } = require("./db");
//import models
const { MenuItem } = require("./menu-item");
const { Menu } = require("./menu");

//associate models
//adds foreign key to musician table connecting a menu item instance to a specific menu
MenuItem.belongsTo(Menu);
//gives us sequelize methods for a one to many relationship
Menu.hasMany(MenuItem);

//export models with added associations
module.exports = { Menu, MenuItem, sequelize };
