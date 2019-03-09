declare interface firstFunction{
    (data: any[]): any;
}

declare interface Lodash {
    first: firstFunction
}

// declare module "lodash" {
//     declare interface firstFunction{
//         (data: any[]): any;
//     }
        
//     declare interface Lodash {
//         first: firstFunction;
//     }

//     export const _ : Lodash;
// }