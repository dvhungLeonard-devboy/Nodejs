import bcrypt from 'bcryptjs'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10)

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)

            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                phoneNumber: data.phoneNumber,
                roleid: data.roleid
            })

            resolve("Create a new user successfully!!!!")
        } catch (error) {
            reject(error)
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt)

            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            })

            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

let getUserInfoId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id }
            })

            if(user){
                resolve(user)
            } else {
                resolve({})
            }
        } catch (error) {
            reject(e)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: {id: data.id} })
            if(user) {
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address
                user.phoneNumber = data.phoneNumber
                user.gender = data.gender

                user.save()
                resolve(200)
            } else {
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

let deteleUserId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id } })
            if(user) {
                user.destroy()
                resolve(200)
            } else {
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewUser,
    getAllUser,
    getUserInfoId,
    updateUserData,
    deteleUserId
}