import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const postSchema=new Schema({
    title:String,
    message:String,
    creator:String,
    selectedFile:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    tags:[String],
    likeCount:{
        type:Number,
        default:0
    }
    
})

export default mongoose.model('Post',postSchema)