const { Waiter } = require("./waiter");
const { sequelize } = require("./db");

describe("Restuarant Database", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });
  test("has a salary", async () => {
    await Waiter.bulkCreate([{ waiter_salary: 700 }, { waiter_name: "James" }]);
  });
  const testWaiter = await Waiter.findAny({
    where: {
      waiter_name: "James",
      waiter_salary: "James",
    },
  });
  await Waiter.bulkCreate(arrayOfWaiter){
    const arrayOfWaiter = [
        {waiter_name: 'James', waiter_salary: 700},
        {waiter_name: 'Cathy', waiter_salary: 1000},
        {waiter_name: 'Jimmy', waiter_salary: 800},
        {waiter_name: 'James', waiter_salary: 700},
]

  }

});
expect(testWaiter.waiter_name).toBe("James");
expect(testWaiter.waiter_salary).toBe(700);
