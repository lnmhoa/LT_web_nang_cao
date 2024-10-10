import express from "express";
import getAboutPage from "./Controller/AboutController.js";
import getHomePage from "./Controller/HomeController.js";
import getContactPage from "./Controller/ContactController.js";
import getAddUserPage from "./Controller/AddUserController.js";
const router = express.Router();
const initWebRoute = (app) => {
    router.get('/', getHomePage);
    
    router.get('/about', getAboutPage);
    router.get('/contact', getContactPage);
    router.post('/addUser', getAddUserPage);
    return app.use('/', router);
}

export default initWebRoute
