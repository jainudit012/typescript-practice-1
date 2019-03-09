import {LessonModel} from '../model/model'

export function updateLesson(id:string, data:any){
    return LessonModel.update(data, {where: {id: id}})
}