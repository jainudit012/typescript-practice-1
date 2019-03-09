import {Application} from 'express'
import {get, getOne} from './courses'
import { createLesson, patchLesson, deleteLesson } from './lessons';

export function initApi(app:Application){
    app.route('/api/courses').get(get)
    app.route('/api/course/:id').get(getOne)
    app.route('/api/lesson').post(createLesson)
    app.route('/api/lesson/:id').patch(patchLesson)
    app.route('/api/lesson/:id').delete(deleteLesson)
}