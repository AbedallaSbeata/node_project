const express = require('express')
const router = express.Router()
const { getProducts, insertProduct, deleteProduct, insertCars, getCars } = require('../logic/product')

router.get('/', getProducts)
router.post('/',insertProduct)
router.get('/', getCars)
router.post('/',insertCars)
router.delete('/:id',deleteProduct)

module.exports = router