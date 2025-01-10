import mongoose from "mongoose";

const articleShema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: Number, require: true },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const ArticleModel = new mongoose.model("Article", articleShema);
export default ArticleModel;
