import {Request, Response, ErrorRequestHandler, NextFunction} from 'express'

export function errorHandler(err:any,req:Request,res:Response,next: NextFunction){
    console.log('API ERROR', err)
    return res.status(500).send({error: true, reason: err.message})
}  