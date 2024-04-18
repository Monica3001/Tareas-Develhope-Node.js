import { Request, Response } from "express";
import Joi from "Joi";
import pgPromise from "pg-promise";
import { db } from "../db.js";


const getAll = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM planets`);
  res.status(200).json(planets);
};

const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.oneOrNone(
    `SELECT * FROM planets WHERE id=$1`,
    Number(id)
  );
  res.status(200).json(planet);
};
const planetSchema = Joi.object({
  name: Joi.string().required(),
});

const createPost = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newPlanet = { name };
  const validatedNewPlanet = planetSchema.validate(newPlanet);

  if (validatedNewPlanet.error) {
    return res
      .status(400)
      .json({ message: validatedNewPlanet.error.details[0].message });
  } else {
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
    return res
      .status(200)
      .json({ message: "the planet was created and passed the validation" });
  }
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
  res.status(200).json({ message: "planet updated" });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));
  res.status(200).json({ message: "planet deleted" });
};

const createImage = async (req: Request, res: Response) => {
  console.log(req.file);
  const { id } = req.params;
  const filename = req.file?.path;

  if(filename){
    db.none(`UPDATE planets SET image=$2 WHERE id=$1`,[id, filename])
    res.status(201).json({ message: "planet image uploaded succesfully" });
  }else{
    res.status(400).json({ message: "planet failed to upload.." });
  }
};

export { getAll, getOneById, createPost, updateById, deleteById, createImage };
