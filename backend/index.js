import express from "express";
const app = express();
import mongoose from "mongoose";
import { PORT, mongoDbURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

app.use(express.json());
app.use("/books", booksRoute);

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to FullStack App!");
});

// connection to db

mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("App connected to Database");
    app.listen(PORT, () => {
      console.log(`server is listening to : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("not connected to database or no internet");
  });
