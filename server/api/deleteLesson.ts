import {LessonModel} from '../model/model'

export function deleteOneLesson(id:string){
    return LessonModel.destroy({where: {id}})
}