interface NameArray{
    name: string
}

const data: NameArray[] = [
    {name: 'BOB'},
    {name: 'TIM'},
    {name:'JOHN'}
]

function cloneArray<T>(array:T[]):T[]{
    return array.slice(0)
}

const clones = cloneArray(data)
const clones2 = cloneArray([1,2,3,4,5])
console.log(clones)
console.log(clones2)