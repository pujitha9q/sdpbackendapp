const adminoperations = require("../operations/adminoperations")


const express = require("express")


const adminrouter = express.Router()


adminrouter.post("/adminlogin",adminoperations.adminlogin)
adminrouter.get("/viewuser",adminoperations.viewuser)
adminrouter.delete("/deleteuser/:email",adminoperations.deleteuser)

module.exports = adminrouter