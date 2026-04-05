import Home from "../model/home.js";

export const createHome = async (req, res,next) => {
  // const { title, location, price, image, description } = req.body;
  // console.log( title, location, price, image, description )
  console.log(req.body,"request body")
  // const newHome = new Home({
  //   title,
  //   location,
  //   price,
  //   image,
  //   description,
  // });
  // await newHome.save();
  console.log("Home created");
  res.status(201).json({ message: "Resource created successfully" });
};
export const editHome = async (req, res) => {
  console.log("Home Edited");
};
export const deleteHome = async (req, res) => {
  console.log("Home Deleted");

  // console.log(req)
  // console.log(res,"Request obj")
  res.end();
};
