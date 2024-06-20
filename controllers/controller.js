

class Controller {
    static async showLandpage(req, res){
        try {
            res.render('landpage')
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller