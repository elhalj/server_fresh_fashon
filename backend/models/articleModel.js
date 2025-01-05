
import mongoose from "mongoose";

const articleShema = new mongoose.Schema({
    nom:String,
    type:String,
    categorie:String,
    prix:String,
    image:String,
    date:{
        type:Date,
        default:Date.now(),
    },
})

const ArticleModel = new mongoose.model("Article", articleShema);
export default ArticleModel;