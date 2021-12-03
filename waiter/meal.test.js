const { Meal } = require("./meal");
const { sequelize } = require("./db");

describe("Restuarant Database", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });

test("Has a meal", async () => {
  await Meal.bulkCreate([
    {
      breakfast_menu: "egg muffin",
      lunch_menu: "tacos",
      dinner_menu: "spaghetti",
    },
    {
      breakfast_menu: "French toast",
      lunch_menu: "French Dip Sandwiches",
      dinner_menu: "chicken",
    },
  ]);
  const testMeal = await Meal.findOne({
    where: {
      breakfast_menu: "egg muffin",
    },
  });
  expect(testMeal.breakfast_menu).toBe("egg muffin");
  expect(testMeal.lunch_menu).toBe("tacos");
  expect(testMeal.dinner_menu).toBe("spaghetti");
});
