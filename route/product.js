const express = require('express')
const router = express.Router()
const { getProducts, insertProduct, deleteProduct} = require('../logic/product')
const { getCars, insertCar} = require('../logic/cars')

router.get('/', getProducts)
router.post('/',insertProduct)
router.get('/', getCars)
router.post('/',insertCar)
router.delete('/:id',deleteProduct)

module.exports = router