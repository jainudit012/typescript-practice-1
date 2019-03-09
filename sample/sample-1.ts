// type HasName = {
//     firstName: string,
//     lastName?: string
// }

// type HasAddress = {
//     street : string
// }

type Person = {
    name: HasName,
    address?: HasAddress
}

let person : Person = {
   name: {
       firstName: 'Udit'
   },
   address: {
       street: '660'
   }
}

console.log(person)