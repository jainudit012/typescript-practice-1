// const sequelize = require('sequelize')
// import * as ORM from 'sequelize'


import express from 'express'
import {Application} from 'express'
import { initApi } from './api/api';
import { errorHandler } from './api/apiErrorHandling';
const bodyParser = require('body-parser')

const app: Application = express()
app.listen(3000, ()=>{
    console.log('Listening on port 3000...')
})
app.use(bodyParser.json())

initApi(app)
app.use(errorHandler)


// findAllCourses().then(res=> {
//     console.log(JSON.stringify(res))
//     console.log('#################')
// })
console.log('Server is runing...') 


