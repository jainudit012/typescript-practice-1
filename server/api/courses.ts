import {onError} from './onError'
import {onSuccess} from './onSuccess'
import { findAllCourses } from '../queries/findAllCourses'
import {findCourse} from '../queries/findCourse'
import {Request, Response} from 'express'
import * as _ from 'lodash'

export function get(req: Request,res: Response){

    // throw new Error('Erorroror  fwejfwf!!!')
    findAllCourses()
    .then(_.partial(onSuccess, res))
    .catch(_.partial(onError, res))
}

export function getOne(req:Request, res:Response){
    const id = req.params.id
    findCourse(id)
    .then(_.partial(onSuccess, res))
    .catch(_.partial(onError, res))
}


