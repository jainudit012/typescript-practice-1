enum PlayerPosition {
    Forward,
    Guard,
    Center
}

type Player = [string, PlayerPosition]

let p1: Player = ['player 1', PlayerPosition.Center]
let p2: Player = ['Player 2', PlayerPosition['Forward']]
let p3: Player = ['Player 3', PlayerPosition.Guard]

type Players = Player[]
const players: Players = [p1,p2,p3]
console.log(players)