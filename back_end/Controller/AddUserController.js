import express from "express";
import UserModel from "../Model/UserModel.js";

const getAddUserPage = async (req, res) => {
    return res.render("main", {data: {title: 'add', page: 'addUser'}})
}


const createUser = async (req, res) => {
    const userData = req.body;
    
    
    let createUser = await UserModel.createUser(userData);
    res.redirect("/");
}

export default {getAddUserPage, createUser};