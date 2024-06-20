const { where } = require('sequelize');
const {UserDetail, User, Category, Course} = require('../models')

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
            const {errors} = req.query
            res.render('register', {errors})
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
            await User.sendEmail(data)
            res.redirect('/login')
        } catch (error) {
            try {
                if(error.name === "SequelizeValidationError"){
                    let errors = error.errors.map(el => el.message)
                    res.redirect(`/register?errors=${errors}`)
                }else{
                    res.send(error)
                }
            } catch (error) {
                res.send(error)
                console.log(error);
                
            }
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
            let data = await Category.findAll({
                include : Course,
                order : [["id", "ASC"]]
            })
            // res.send(data)
            res.render('studentPage', {data})
        } catch (error) {
            res.send(error)
            console.log(error);
        }
    }
    static async pageTeacher(req, res){
        try {
            // const {id} = req.params
            let data = await Category.findAll({
                include : Course,
                order : [["id", "ASC"]]
            })
            let dataUser = await UserDetail.findAll({include : User, order : [["UserId", "ASC"]]})
            // let dataTeacher = await UserDetail.findByPk(+id)
            // res.send(dataUser)
            res.render('teacher', {data, dataUser})
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
    static async showFormUp (req, res){
        try {
            const {id} =req.params
            let data = await UserDetail.findByPk(id)
            // res.send(data)
            res.render('formEditStudent', {data})
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
    static async postUpStudent(req, res){
        try {
            // console.log(req.body);
            const {id} = req.params
            const {fullName, age, educationLevel, phoneNumber} = req.body
            let data = await UserDetail.update({
                fullName : fullName, 
                age : age, 
                educationLevel : educationLevel, 
                phoneNumber : phoneNumber},{
                where : {id : id}
            })
            // res.send(data)
            res.redirect('/teacher')
        } catch (error) {
            console.log(error);
            res.send(error.message)
        }
    }
    static async deleteStudent(req, res){
        try {
            // console.log(req.params);
            const {UserId, id} = req.params //id userdetail
            await UserDetail.destroy({where : {
                id : id}})
            await User.destroy({where : {id : UserId}})
            res.redirect('/teacher')
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = Controller