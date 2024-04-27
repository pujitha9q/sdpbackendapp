const useroperations = require("../operations/useroperations")

const express = require("express")

const userrouter = express.Router()

// user routes
userrouter.post("/userlogin",useroperations.userlogin)
userrouter.post("/insertuser",useroperations.insertuser)

module.exports = userrouter