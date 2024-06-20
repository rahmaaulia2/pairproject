const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const student = require('./student')

router.get('/', Controller.showLandpage)
router.get('/register', Controller.showPageRegister)
router.post('/register', Controller.postRegister)
router.get('/login', Controller.showLogin)
router.post('/login', Controller.postLogin)
router.use('/student', student)

module.exports = router