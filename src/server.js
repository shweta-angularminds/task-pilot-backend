import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { app } from "./app.js";




connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("\nServer is running at port : " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed!! ", err);
  });
