interface HasName{
    firstName: string,
    lastName ?:string
}

/*
type HasName = {
    firstName: string,
    lastName ?:string
}

use interface when an object is adhering to some structure and type when joining or union two or more types or interfaces.
*/

interface HasAddress{
    street: string
}

type Player1 = (HasAddress & HasName) 

const newPlayer: Player1 = {firstName: 'Udit', lastName: 'Jain', street: '660'}
let otherPlayer: Player1

console.log(newPlayer)
// console.log(otherPlayer)