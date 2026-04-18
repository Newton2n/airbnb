import Home from "../model/home.js";

//create home
export const createHome = async (req, res, next) => {
  const { title, location, price, image, description } = req.body;
  console.log("All data",title, location, price, image, description);
  try {
    const newHome =await new Home({
      title,
      location,
      price,
      image,
      description,
    });
    await newHome.save();
    console.log("Home created");
    res.status(201).json({ message: "Resource created successfully" });
  } catch (error) {
    throw new Error("Something went wrong to create home", error);
  }
};

// fetch all data
export const getHomes = async (req, res) => {
  try {
    const homeData = await Home.find();
    console.log(homeData);
    res
      .status(200)
      .json({ message: "All home fetch success ", homeData: homeData });
  } catch (error) {
    throw new Error("Something went wrong to retrieve data", error);
    res.status(500).json({ message: "500 Internal Server Error" });
  }
};

// get single home details
export const getHomeDetails = async (req, res) => {
  const homeId = req.params.id;
  console.log(homeId, "params");
  try {
    const homeData = await Home.findById(homeId);
    console.log(homeData);
    res
      .status(200)
      .json({ message: " home fetch success ", homeDetails: homeData });
  } catch (error) {
    throw new Error("Something went wrong to retrieve data", error);
    res.status(500).json({ message: "500 Internal Server Error" });
  }
};

export const editHome = async (req, res) => {
  console.log("Home Edited");
};
export const deleteHome = async (req, res) => {
  console.log("Home Deleted");
  res.end();
};
