// module.exports = function buildName({firstName, lastName}, ...address){
//  return `${firstName} ${lastName}, address: ${address}`
// }

export function buildName({firstName, lastName}:any, ...address:any[]){
    return `${firstName} ${lastName}, address: ${address}`
   }

export const DEMO:string = 'demo!'
// module.exports = buildName