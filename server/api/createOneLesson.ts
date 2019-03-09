import {LessonModel} from '../model/model'

export function createOneLesson(data:any){
    return LessonModel.create(data)
}