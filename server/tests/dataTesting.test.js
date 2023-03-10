const {sequelize} = require('../db/Connection')
const {Items} = require('../models/Item')

beforeEach (async() => {
    await sequelize.sync({force: true})
})

describe('testing the model table', () => {
    it('Testing the model item properties',async() => {    
        const newItem = await Items.create({
            title: "laptop bag",
            price: 22,
            description:
              "bag for laptop",
            category: "men's clothing",
            image: "image.url",
        })
        expect(
            newItem.title 
        ).toEqual("laptop bag");
        expect(
            newItem.price
        ).toEqual(22);
        expect(
            newItem.description  
        ).toEqual("bag for laptop");
        expect(
            newItem.category 
        ).toEqual("men's clothing");
        expect(
            newItem.image 
        ).toEqual("image.url");
    })

})