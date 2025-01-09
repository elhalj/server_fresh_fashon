
import mongoose from "mongoose";

const articleShema = new mongoose.Schema({
    name:{type:String, require:true},
    image:{type:String, require:true},
    price:{type:String, require:true},
    category:{type:String, require:true},
    description:{type:String, require:true},
    stock:{type:Number, require:true},
    date:{
        type:Date,
        default:Date.now(),
    },
})

const ArticleModel = new mongoose.model("Article", articleShema);
export default ArticleModel;