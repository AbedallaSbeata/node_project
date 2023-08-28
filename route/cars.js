const express = require('express')
const router = express.Router()
const { getCars, insertCar} = require('../logic/cars')

router.get('/', getCars)
router.post('/',insertCar)
//router.delete('/:id',deleteProduct)

module.exports = router