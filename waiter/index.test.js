//import the associated models from associations.js
const {Menu, MenuItem} = require('./associations')
const {sequelize} = require('./db')
//test menu item database CRUD
describe('Menu Item Database', () => {

    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of menu items
        const arrayOfMenuItems = [
            {food_name: 'Eggs', chef_id: '2', price: 2},
            {food_name: 'Pancakes', chef_id: '3', price: 5},
            {food_name:  'Burger', chef_id: '3', price: 6},
            {food_name: 'Fries', chef_id: '2', price: 3},
            {food_name: 'Pasta', chef_id: '1', price: 8},
            {food_name: 'Daquiri', chef_id: '3', price: 6},
            {food_name: 'Steak', chef_id: '4', price: 8},
            {food_name: 'Martini', chef_id: '1', price: 5}
        ]
//create array of menus
const arrayOfMenus =[
    {menu_name: 'Breakfast', time_served: 'morning', age_req: false},
    {menu_name: 'Lunch', time_served: 'afternoon', age_req: false},
    {menu_name: 'Dinner', time_served: 'evening', age_req: false},
    {menu_name: 'Dessert', time_served: 'all day', age_req: false},
    {menu_name: 'Mixed Drinks', time_served: 'all day', age_req: true}
    {menu_name: 'Kids Menu', time_served: 'all day', age_req: true}
]
//add arrays to database
await Menu.bulkCreate(arrayOfMenus)
await MenuItem.bulkCreate(arrayOfMenuItems)
})

//create instances of Musician Model for testin
test('menus have age requirement', async() => {
//read test instance from db
const testMenu = await Menu.findOne({where: {menu_name: 'Breakfast'}});
expect(testMenu.age_req).toBe(false)
})
test('menu has time served', async() => {
    //read test Musician instance from db
    const testMenu = await Menu.findOne({where: {menu_name: 'Mixed Drinks'}});
    expect(testMenu.time_served).toBe('all day')
})

test('price of food can be found', async() => {
    //read test Band instance from db
    const testMenuItem = await MenuItem.findOne({where: {food_name: 'Pancakes'}});
    expect(testMenuItem.price).toBe(5)
})

test('menus can have many menu items', async()=> {
    //read test menu instance from db
    const testMenu = await Menu.findOne({where: {menu_name: 'Breakfast'}});
    //create 2 test instances of Menu items
    const testMenuItem1 = await MenuItem.findOne({where: {food_name: 'Eggs'}})
    const testMenuItem2 = await MenuItem.findOne({where: {food_name: 'Pancakes'}})
//add test menu items to test menu
        //magic sequelize add method
        await testMenu.addMenuItem(testMenuItem1)
        await testMenu.addMenuItem(testMenuItem2)
        //retrieve list of musicians in this band
        const MenuItemList = await testMenu.getMenuItems()
        //assert that the list of musicians is length 2
        expect(MenuItemList.length).toBe(2)
        //assert that the 0th index of the array musicianList is an instance of the model Musician
        expect(MenuItemList[0] instanceof MenuItem).toBeTruthy()
        expect(MenuItemList[0].food_name).toMatch('Eggs')

    })

})
