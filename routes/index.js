const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const student = require('./student')

router.get('/', Controller.showLandpage)
router.use('/students', student)

module.exports = router