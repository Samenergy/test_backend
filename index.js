import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRoute from "./routes/product.route.js";

const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect("mongodb+srv://backle:0304@backenddb.li6gtrl.mongodb.net/Test")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
