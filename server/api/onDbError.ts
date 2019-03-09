const hri = require('human-readable-ids').hri
import {Response} from 'express'

export function DatabaseError(res:Response, err:any){
    const id = hri.random()
    console.error('Database Error-',id,err)
    return res.status(500).send({error: true, reason: `Lesson Creation failed ; error - ${id}`})
}