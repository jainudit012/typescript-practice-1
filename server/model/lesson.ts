import * as ORM from 'sequelize'
import {Sequelize} from 'sequelize'

export function initLesson(sequelize: Sequelize){
    return sequelize.define('Lesson', {
        description : ORM.STRING,
        url: ORM.STRING,
        duration: ORM.STRING,
        courseId : ORM.INTEGER,
        seqNo: ORM.INTEGER,
        pro: ORM.BOOLEAN,
        tags: ORM.STRING,
        gitHubUrl: ORM.STRING
    })
}


