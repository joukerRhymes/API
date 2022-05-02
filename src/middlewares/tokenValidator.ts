import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../lib/jwt";

const MISSING_MSG = 'Missing authorization header'

export default function tokenValidator(){
    return function (req:Request, res:Response, next: NextFunction){
        const authHeder = req.headers.authorization

        if (!authHeder){
            res.status(404).json({ message: MISSING_MSG })
            return
        }

        const [bearer, token] = authHeder.split(' ')

        if(bearer !== 'Bearer'){
            res.status(401).json({message: MISSING_MSG})
            return
        }

        try{
            const tokenPayload = verifyToken(token)
            req.user = tokenPayload
        } catch{
            res.status(401).json({message: MISSING_MSG})
            return

        }
        return next()

    }
}