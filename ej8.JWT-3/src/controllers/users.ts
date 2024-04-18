import * as dotenv from "dotenv";
dotenv.config();
import { Response, Request } from "express";
import { db } from "./../db.js";
import jwt from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await db.one(`SELECT * FROM users WHERE username=$1`, username);
  if (user && user.password === password) {
    const payload = {
      id: user.id,
      username,
    };
    const { SECRET = "" } = process.env;
    const token = jwt.sign(payload, SECRET);

    console.log(token);

    await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token]);
    res.status(200).json({ id: user.id, username, token });
  } else {
    res.status(400).json({ message: "incorrect username or password" });
  }
};

const signUp = async (req: Request, res: Response) => {
  const {username, password} = req.body;
  const user = await db.oneOrNone(`SELECT * FROM users WHERE username=$1`, username);

  if(user){
    res.status(400).json({message: "username already exists"})
  }else {
    const { id } = await db.one(
      `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`,
    [username, password]
  );
  res.status(201).json({ id ,message: "Signup successful. Now you can log in!"})
  };
}

const logOut = async (req: Request, res: Response) => {
   const user: any = req.user;
   await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user?.id, null])
  res.status(200).json({message: "Logout succesful"})
  }

export { login , signUp , logOut};
