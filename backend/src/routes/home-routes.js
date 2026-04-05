import express from "express";
import multer from "multer";
const upload = multer()
import {
  createHome,
  editHome,
  deleteHome,
} from "../controller/home-controller.js";

const Home = express.Router()



Home.post("/create-home",upload.none(), createHome);
Home.get("/edit-home", editHome);
Home.get("/delete-home", deleteHome);

export default Home;
