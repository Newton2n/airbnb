import mongoose from "mongoose";

import { Schema } from "mongoose";

const homeSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  description: { type: String, required: false },
});

const Home = mongoose.model("Home", homeSchema);
export default Home;
