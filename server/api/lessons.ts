import {onError} from './onError'
import {onSuccess} from './onSuccess'
import {createOneLesson} from './createOneLesson'
import {DatabaseError} from './onDbError'
import {updateLesson} from './updateOneLesson'
import {deleteOneLesson} from './deleteLesson'
import {Request, Response} from 'express'
import * as _ from 'lodash'



export function createLesson(req: Request,res: Response){

    // // throw new Error('Erorroror  fwejfwf!!!')
    createOneLesson(req.body)
    .then(_.partial(onSuccess, res))
    .catch(_.partial(DatabaseError, res))
    .catch(_.partial(onError, res))
}

export function patchLesson(req:Request, res: Response){
    updateLesson(req.params.id,req.body)
    .then(_.partial(onSuccess, res))
    .catch(_.partial(DatabaseError, res))
    .catch(_.partial(onError, res))
}

export function deleteLesson(req:Request, res: Response){
    deleteOneLesson(req.params.id)
    .then(_.partial(onSuccess, res))
    .catch(_.partial(DatabaseError, res))
    .catch(_.partial(onError, res))
}




