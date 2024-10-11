import express from "express";
import getAboutPage from "./Controller/AboutController.js";
import getHomePage from "./Controller/HomeController.js";
import getContactPage from "./Controller/ContactController.js";
import AddUserPage from "./Controller/AddUserController.js";
const router = express.Router();
const initWebRoute = (app) => {
    router.get('/', getHomePage);
    
    router.get('/about', getAboutPage);
    router.get('/contact', getContactPage);
    router.get('/addUser', AddUserPage.getAddUserPage);
    router.post('/addUser', AddUserPage.createUser);
    return app.use('/', router);
}

export default initWebRoute
