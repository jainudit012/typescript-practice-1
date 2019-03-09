enum Editor {
    DC,
    MARVEL
}

// class SuperHero {
//     name: string;
//     editor: Editor;
//     year: number;

//     constructor(
//         name: string,
//         editor: Editor,
//         year: number)
//     {
//         this.name = name,
//         this.editor = editor,
//         this.year = year
//     }
// }

interface canFly{
    fly (msg:string):void
}

interface Hero{
    name: string,
    year: number
}

const batman:Hero = {
    name: 'Batman',
    year: 1991
}

abstract class SuperHero  implements Hero{
    static Label = 'HERO: '
    readonly name:string
    constructor(
        name: string,
        public _editor: Editor,
        public  year: number)
    {
        this.name = name
        this._editor = _editor
    }

    // abstract createMessage():string
    // createMessage(){
    //     return `Super Hero Is: ${this.name}`
    // }
    static createMessage(hero: SuperHero):string{
        return `${this.Label} ${hero.name} ${Editor[hero._editor]} ${hero.year}`
    }
}


class FlyingHero  extends  SuperHero implements canFly {
    console(str:string){
        return `Flying Hero is: ${str} ${this.name} ${this.year}`
    }
    get editor():string{
        return Editor[this._editor]
    }

    set editor(editorName:string){
        this._editor = (<any>Editor)[editorName]
    }

    fly(message:string){
        console.log(`${message} ${this.year}`)
    }
    
}

const heman = new FlyingHero('He Man', Editor.MARVEL, 1998)

// const superman = new SuperHero('Superman', Editor.DC, 1990)

// console.log(superman)
// heman.editor = 'something'
console.log(heman)

// console.log(superman.createMessage())
console.log(SuperHero.createMessage(heman))
console.log(heman.console('This string is a bonus string. Do enjoy!'))
heman.fly('string message')
// console.log(heman.year)