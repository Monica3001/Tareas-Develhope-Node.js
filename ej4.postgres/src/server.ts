import express from "express";
import dotenv from 'dotenv'
import "express-async-errors";
import morgan from "morgan";

import {getAll, getOneById, createPost, updateById, deleteById }from "./controllers/planets.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets",createPost );

app.put("/api/planets/:id",updateById);

app.delete("/api/planets/:id", deleteById);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
