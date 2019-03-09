import {Response} from 'express'

export function onError(res:Response, err:any){
    console.log(err)
    return res.status(500).send({error: true, reason: err.message})
}