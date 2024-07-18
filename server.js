require('dotenv').config()
const express=require('express')
const appServer=express();
const PORT=process.env.PORT||4403;

const mongoose=require('mongoose')

const apiRouter=require('./router/apiRouter')


appServer.use(express.urlencoded({extended:true}))
appServer.use(apiRouter)

mongoose.connect(process.env.DB_URL)
    .then(res=>{
        console.log("Database connected successfully");
        appServer.listen(PORT,()=>{
            console.log(`visit at http://localhost:${PORT}`);
        })

    })
    .catch(err=>{
        console.log("error data",err);
    })


