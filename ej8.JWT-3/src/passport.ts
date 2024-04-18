import * as dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import passportJWT from "passport-jwt";
import { db } from "./db.js";

const { SECRET } = process.env;

passport.use(
  new passportJWT.Strategy(
    {
    secretOrKey: SECRET as any,
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done)=> {
        const user = db.one(`SELECT * FROM users WHERE id=$1`, payload.id);

        try{
            return user ? done (null, user) : done(new Error("user not found"));
        }catch(error){
            done(error);
        }
    }
))
