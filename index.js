require("dotenv").config();
const express=require('express')
const app=express();
const cors=require('cors')
const PORT= process.env.PORT || 6010
require('./db/conn')
const router=require('./Routes/router')

// app.get('/',(req,resp)=>{
//     resp.status(201).json("server start")
// })

app.use(cors());
app.use(express.json())
app.use(router);

app.use('/uploads',express.static('./uploads'))
app.use('/files',express.static('./public/files'))
app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
})