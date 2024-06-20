const {UserDetail, User, Category} = require('../models')

class Controller {
    static async showLandpage(req, res){
        try {
            res.render('landpage')
        } catch (error) {
            res.send(error)
            console.log(error);
        }
    }
    static async showPageRegister(req,res){
        try {
            res.render('register')
        } catch (error) {
            res.send(error)
            console.log(error);
        }
    }
    static async postRegister(req,res){
        try {
            // console.log(req.body);
            const {fullName, age, educationLevel, role, email, phoneNumber, password}= req.body
            let data = await User.create({email, password, role})
            await UserDetail.create({fullName, age, educationLevel, email, phoneNumber, UserId : data.id})
            res.redirect('/login')
        } catch (error) {
            res.send(error.message)
            console.log(error);
        }
    }
    static async showLogin(req,res){
        try {
            res.render('login')
        } catch (error) {
            res.send(error)
            console.log(error);
        }
    }
    static async postLogin(req,res){
        try {
            const {email, password} = req.body
            
            res.render('student')
        } catch (error) {
            res.send(error)
            console.log(error);
        }
    }
    static async pageLevelStudent(req,res){
        try {
            let data = await Category.findAll()
            // res.send(data)
            res.render('studentPage', {data})
        } catch (error) {
            res.send(error)
            console.log(error);
        }
    }
}

module.exports = Controller