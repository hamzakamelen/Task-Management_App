require("dotenv").config()
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

//Router
const PostRouter = require("./Routes/PostRoute")
//Middle Ware
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/PostRouter',PostRouter)


mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Data base Connected && Server is running on 8000 Port")
    })
}).catch((err)=>{
    console.log(err)
})