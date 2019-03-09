import {CourseModel, LessonModel} from '../model/model'
import { CourseDetails } from '../../shared/model/course-detail';
import Bluebird from 'bluebird'
import { createCourseDetail } from '../../shared/model/createCourseDetail';

export function findCourse(id:number): Bluebird<CourseDetails>{
    return CourseModel.findById(id, {
        include: [{
            model: LessonModel
        }]
    }).then(createCourseDetail)
}