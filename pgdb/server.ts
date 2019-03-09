// const sequelize = require('sequelize')
// import * as ORM from 'sequelize'




import {CourseModel} from '../server/model/model'


console.log(CourseModel.findAll())
console.log('#################')
CourseModel.findAll().then(res=> {
    console.log(JSON.stringify(res))
    console.log('#################')
})
console.log('Server is runing...')


