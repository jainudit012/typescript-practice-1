class SuperCharacter{
    constructor(public name:string){
        this.name = name
    }
}

class Hero extends SuperCharacter {

}

class Villain extends SuperCharacter{

}

class SuperTeam <T>{
    constructor(public members: T[], public leader: T){

    }
}

const captain = new Hero('Captain America')
const bat = new Hero('BatMan')
const green = new Hero('Green Lantern')
const ivy = new Villain('Poison Ivy')
const hydra = new Villain('Hydra') 
const magnet = new Villain('Magneto')

const ATeam = new SuperTeam([captain, bat, green], captain)
const members = ATeam.members 

const BTeam = new SuperTeam([ivy, hydra, magnet], magnet)
const members2 = BTeam.members

const CTeam = new SuperTeam([captain, bat, green, ivy, hydra, magnet], captain)
const members3 = CTeam.members