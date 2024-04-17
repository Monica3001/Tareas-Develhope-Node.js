import { Request, Response } from "express";
import Joi from "Joi";

type Planet = {
    id: number;
    name: string;
  };
  type Planets = Planet[];

  let planets : Planets = [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" },
  ];

const getAll = (req: Request, res: Response) => {
    res.status(200).json(planets);
  }

const getOneById = (req: Request, res: Response) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));

    res.status(200).json(planet);
  }

  const planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
  })

const createPost = (req: Request, res: Response) => {
    const { id, name } = req.body;
    const newPlanet : Planet = { id, name };
    const validatedNewPlanet = planetSchema.validate(newPlanet)

    if(validatedNewPlanet.error){
      return res.status(400).json ({message: validatedNewPlanet.error.details[0].message})
    } else {
      planets = [...planets, newPlanet];
      return res.status(200).json({message: 'the planet was created and passed the validation'})
    }
  }

const updateById = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map(planet => planet.id === Number(id) ? ({ ...planet, name}) : planet)

  console.log(planets);
  res.status(200).json({message: 'planet updated'});
  }

const deleteById = (req: Request, res: Response) => {
    const { id } = req.params;
    planets = planets.filter(p => p.id ! === Number(id));

    res.status(200).json({message: 'planet deleted'});
  }


export {getAll, getOneById, createPost, updateById, deleteById}
