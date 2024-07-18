const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const apiSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    }


},{
    timestamps:true,
    versionKey:false
})

const apiModel=new mongoose.model("api_detail",apiSchema)

module.exports=apiModel