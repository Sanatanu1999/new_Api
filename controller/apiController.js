const apiModel=require('../model/authModel')
const bcrypt=require('bcryptjs')
const postdata =async(req,res)=>{
    try{
        console.log("collected value from add product form",req.body,req.file);
        let hashPassword= await bcrypt.hash(req.body.password,12)

        if(!req.body.name){
            return res.status(401).json({
                success:false,
                massage:"name is required"
            });
            
            }else if(!req.body.email){
                return res.status(401).json({
                    success:false,
                    massage:"email is required"
                })
        }else if(!req.body.password){
            return res.status(401).json({
                success:false,
                massage:"password is required"
            })
    }else if(!req.file.image){
        return res.status(401).json({
            success:false,
            massage:"image is required"
        })
}else{
    const storeData=new apiModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.hashPassword,
        Image:req.file.filename
    })
    let saved=await storeData.save();
    if(saved){
        return res.status(200).json({
            success:true,
            massage:"add  successfully"
        })
    }
}}catch(err){
    console.log("error at collecting detail",err);
    return res.status(401).json({
        success:false,
        massage:err
    })
}
    }
    