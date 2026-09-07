import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

import userRoutes from "./routes/userRoutes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/users");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
