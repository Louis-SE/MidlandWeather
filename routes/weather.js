const express = require('express')
const router = express.Router()

const {getWeather} = require('../controllers/weather')

router.get('/:city', getWeather)

module.exports = router