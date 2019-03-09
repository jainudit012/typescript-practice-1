export interface CourseSummary {
    readonly id: number,
    description : string,
    iconUrl:string,
    readonly url: string,
    courseListIcon: string,
    seqNo: number,
}

export function createCourseSummary({id, description, url, iconUrl, courseListIcon, seqNo}:any):CourseSummary{
    return {id, description, url, iconUrl, courseListIcon, seqNo}
}

export function createCourseSummaries(data:any[]):CourseSummary[]{
    return data.map(createCourseSummary)
}