const Controller = require('../controllers/controller')
const student = require('express').Router()

student.get('/', Controller.pageLevelStudent)

module.exports = student