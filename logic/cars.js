const CARS = require('../model/cars')

module.exports = {
    getCars : async (req,res) => {
        const cars = await CARS.find()
        res.json({
            status: "success",
            data: cars.map(res => {
                return {
                    id: res.id,
                    name: res.name,
                    model: res.model,
                    price: res.price,
                    color: res.color
                }
            })
        })
    },
    insertCar : async (req,res) => {
       const car = await new CARS({
            name: req.body.name,
            model: req.body.model,
            price: req.body.price,
            color: req.body.color
       }).save()
       
       res.json({"Status": "Success","message:" : "New Car Inserted Successfully"})
    },
    // deleteProduct : async (req,res) => { 
    //     const id = req.params.id
    //     const del = await PRODUCTS.findByIdAndRemove(id)
    //     res.json({"message" : del})
    // }
}