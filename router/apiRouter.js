const express=require('express')
const route=express.Router()
const {postdata,viewproduct,deleteProd}=require('../controller/apiController')
const multer=require('multer')
const path=require('path')

//to use the images folder after adding it to database
const fileStorage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,path.join(__dirname,"..","uploads"),(err,data)=>{
            if(err) throw err;
        })
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname,(err,data)=>{
            if(err) throw err;
    })
}
    
})

//file.mimetype==='image/jpg'
const fileFilter=(req,file,callback)=>{
    if(
        file.mimetype.includes("png")||
        file.mimetype.includes("jpg")||
        file.mimetype.includes("jpeg")||
        file.mimetype.includes("wbep") 
    ){
        callback(null,true);
    }else{
        callback(null,false);
    }
    
}

const upload=multer({
    storage:fileStorage,
    fileFilter:fileFilter,
    limits:{fieldSize:1024*1024*5}
})

// const upload_type=upload.single("product_image")
const upload_type=upload.array("product_image",2)

route.post('/admin/postNewdata',upload_type,postdata)
route.get('/admin/viewNewdata',viewproduct)
route.get('/admin/deleteProduct/:id',deleteProd)

module.exports=route