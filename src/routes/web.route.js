import express from "express"
import homeController from "../controllers/home.controller"
let router = express.Router()

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)

    router.get("/crud", homeController.getFormCRUD)
    router.post("/post-crud", homeController.postCRUD)
    router.get("/get-crud", homeController.getCRUD)
    router.get("/edit-crud", homeController.editCRUD)
    router.post("/put-crud", homeController.putCRUD)
    router.get("/delete-crud", homeController.deleteCRUD)
    router.get("/error-crud", homeController.errorCRUD)

    return app.use("/", router)
}

module.exports = initWebRoutes