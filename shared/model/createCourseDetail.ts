import { CourseDetails } from "./course-detail";
import { Lesson } from "./lessons";

export function createCourseDetail({id, description, url, iconUrl,courseListIcon, seqNo,longDescription,comingSoon,isNew,isOngoing,Lessons}:any):CourseDetails{
    return {id, description, url, iconUrl,courseListIcon, seqNo,longDescription,comingSoon,isNew,isOngoing,Lessons: Lessons.map(createLessonArray)}
}

function createLessonArray({ id,url,description,duration,seqNo,courseId,pro,tags}:any):Lesson{
   return {id,url,description,duration,seqNo,courseId,pro,tags}
}