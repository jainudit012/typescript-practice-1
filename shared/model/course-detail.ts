import {Lesson} from './lessons'
import { CourseSummary } from './course-summary';

export interface CourseDetails extends CourseSummary{
    
    longDescription: string,
    iconUrl: string,
    comingSoon?: boolean,
    isNew?: boolean,
    isOngoing?: boolean,
    Lessons?: Lesson[]
}