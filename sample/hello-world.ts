import {buildName} from './buildName'

const name1 = {
    firstName: 'Udit',
    lastName: 'Jain'
}

const partialAddr = ['660 Indira Nagar']
const colony = ['Colony']
const address = [...partialAddr, colony]
console.log('Address: ', address)
console.log(buildName(name1, address))