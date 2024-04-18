import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";
import {
  getAll,
  getOneById,
  createPost,
  updateById,
  deleteById,
  createImage,
} from "./controllers/planets.js";
import multer from "multer";
import { login , signUp, logOut} from "./controllers/users.js"
import authorize from "./authorize.js";
import "./passport.js"

const PORT = process.env.PORT || 3001;
const app = express();
const storage = multer.diskStorage({
destination: (req,file,cb)=>{
  cb(null, "./uploads")
},
filename: (req,file,cb)=>{
  cb(null, file.originalname)
},
})
const upload = multer({storage})

app.use(morgan("dev"));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));


app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);
app.post("/api/planets", createPost);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);
app.post("/api/planets/:id/image", upload.single("image"), createImage);
app.post("/api/users/login", login);
app.post("/api/users/signup", signUp);
app.get("/api/users/logout", authorize, logOut);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});