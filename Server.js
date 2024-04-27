const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = "mongodb://localhost:27017/MusicApi"
mongoose.connect(dburl).then(() => {
    console.log("Connetced to DB Successfully")
}).catch((e) => {
   console.log(e.message)
});


const app = express() 
app.use(express.json())   // to parse JSON data
app.use(cors())  // to enable the data


const adminrouter = require("./routes/adminroutes")

const userrouter = require("./routes/userroutes")

app.use("",adminrouter)
app.use("",userrouter)





const port=2029
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})