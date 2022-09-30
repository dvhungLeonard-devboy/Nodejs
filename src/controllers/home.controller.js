import db from '../models/index'
import CRUDService from '../services/crud.services'

let getHomePage = async (req, res) => {
    try {
        let data =  await db.User.findAll()

        return res.render('home.view.ejs', {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(e)
    }
}

let getFormCRUD = async (req, res) => {
    return res.render('crud.view.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    return res.redirect('/get-crud')
}

let getCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()

    return res.render('getCRUD.view.ejs', { data })
}

let editCRUD = async (req, res) => {
    let userId = req.query.id
    if(userId) {
        let userData = await CRUDService.getUserInfoId(userId)
        return res.render('editCRUD.view.ejs',{ userData })
    } else {

    }
}

let putCRUD = async (req, res) => {
    let data = req.body
    let status = await CRUDService.updateUserData(data)
    if(status === 200) {
        return res.redirect('/get-crud')
    }
}

let deleteCRUD = async (req, res) => {
    if(req.query.id) {
        let id = req.query.id
        if(id) {
            let status = await CRUDService.deteleUserId(id)
            if(status === 200) {
                return res.redirect('/get-crud')
            } else {
                return res.redirect('/error-crud')
            }
        }
    } else {
        return res.redirect('/error-crud')
    }
}

let errorCRUD = (req, res) => {
    return res.render('errorCRUD.view.ejs')
}

// Object => key : value
module.exports = {
    getHomePage,
    getFormCRUD,
    postCRUD,
    getCRUD,
    editCRUD,
    putCRUD,
    deleteCRUD,
    errorCRUD
}