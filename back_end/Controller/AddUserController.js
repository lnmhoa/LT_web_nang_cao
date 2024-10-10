import express from "express";
import UserModel from "../Model/UserModel.js";

const createUser = async (req, res) => {
    const userData = req.body;
    console.log(userData);
    
    let createUser = await UserModel.createUser(userData);
    res.redirect("/");
   
}

export default createUser;