import express from "express";
import mongoose from "mongoose";
import route from "./routes/index"
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const mongoURL = process.env.MONGODB_URL;
if(!mongoURL){
  console.log("mongourl not have in env")
  process.exit(1)
}
// MongoDB connection
mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

app.use("/api",route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
