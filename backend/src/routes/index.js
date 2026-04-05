import express from "express"


import Home from "./home-routes.js"


const Router = express.Router();


Router.use("/admin",Home);

export default Router