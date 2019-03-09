import {Response} from 'express'

export function onSuccess(res:Response, data:any){
    return res.send({error: false, data: data})
}