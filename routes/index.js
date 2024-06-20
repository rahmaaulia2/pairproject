const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', Controller.showLandpage)
router.get('/register', Controller.showPageRegister)
router.post('/register', Controller.postRegister)
router.get('/login', Controller.showLogin)
router.post('/login', Controller.postLogin)
router.get('/student', Controller.pageLevelStudent)
router.get('/teacher/update/:id', Controller.showFormUp)
router.post('/teacher/update/:id', Controller.postUpStudent)
router.get('/teacher/delete/:UserId/:id', Controller.deleteStudent)
router.get('/teacher/', Controller.pageTeacher)

module.exports = router