const { Chef } = require("./chef");
const { sequelize } = require("./db");

describe("Restuarant Database", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

test("Has a chef", async () => {
  await Chef.bulkCreate([
    { chef_name: "Lamin", chef_speciality: "Sous-Chef" },
    { chef_name: "Crystal", chef_speciality: "Dessert" },
    { chef_name: "Anuja", chef_speciality: "Entree" },
    { chef_name: "Nahima", chef_speciality: "Sauce" },
  ]);
  const testChef = await Chef.findOne({
    where: {
      chef_name: "Lamin",
    },
  });
  expect(testChef.chef_name).toBe("Lamin");
  expect(testChef.chef_speciality).toBe("Sous-Chef");
});
