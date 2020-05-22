// getMoves()
// Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos



const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: 
    [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
}

const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
}

const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
}

const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
}


const getMoves = obj => {

    const {moves} = obj
   
    return moves
}

// getPrimaryAbility()
// Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria

const getPrimaryAbility = obj => {

    const {ability:{primary}} = obj
    return primary
}


// getWeaknesses()
// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const getWeaknesses = obj => {

    const {modifiers:{weakness}} = obj
   
    return weakness
}

// getResistances()
// Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const getResistances = obj => {
    const {modifiers:{resistances}} = obj
   
    return resistances 
}

// resistsType()
// Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

const resistsType = (pokemon, type) => {

    const {modifiers: {resistances }} = pokemon
    return resistances.includes(type)
}

// resistsMove()
// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: { name: "Rain dance", type: "water" }


// MAL CORREGIR, ESTÁ IGUAL AL OTRO
const resistsMove = (pokemon, move)  => {
    const {name} = move
    const {moves} = pokemon
    return moves.includes(name)
}




// addAbility()
// Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada

const addAbility = (pokemon, newAbility) => {
    
    const {name, type, ability, stats, moves, modifiers} = pokemon
    const addAb = {...ability, ...newAbility}
    const newObj = {name, type, ability: addAb, stats, moves, modifiers}
  
    return newObj
}


// addMove()
// Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

const addMove = (obj, move) => {

    const {name, type, ability, stats, moves, modifiers} = obj

    const newMove = {...moves, 0:move}

    const newObj = { name, type, ability, stats, moves: newMove, modifiers}
  
    return newObj
}


// removeMove()
// Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento eliminado.


const removeMove = (pokemon, move) => {

    const {name, type, ability, stats, moves, modifiers} = pokemon

    const indice = pokemon.moves.indexOf(move)
    const copyMove = pokemon.moves.splice(indice,1)

    const newObj = {name, type, ability, stats, moves, modifiers}

    return newObj
}

// isWeakAgainst()
// Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es débil frente al tipo de pokémon que lo ataca

const isWeakAgainst = ({type}, {modifiers:{weakness}}) => {
    // const {type} = attacker
    // const {modifiers:{weakness}} = attacked

    return weakness.includes(type)
}

// isStrongAgainst()
// Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es resistente al tipo de pokémon que lo ataca

const isStrongAgainst = ({type}, {modifiers:{resistances}}) => {
    console.log(resistances)
    console.log(type)
    
    return resistances.includes(type)
}

// getAttackModifier()
// Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacker, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
// 2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
// 0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
// 1, si no es débil ni resistente

const getAttackModifier = (attacker, attacked) => {
    if(isWeakAgainst(attacker, attacked)){
        return 2
    } else if (isStrongAgainst(attacker, attacked)) {
        return 0.5
    } else {
        return 1
    }
}


// getAttackLog()
// Crear una función getAttackLog, que tome como argumento un objeto con las siguientes propiedades:
// {
//     attacker: "Squirtle",
//     attacked: "Pikachu",
//     move: "Water Gun",
//     damage: 12,
//     modifier: "weak" // otros valores: "resistant", "normal"
// }
// Y que devuelve un string con la siguiente plantilla:

// `${attacker} used ${move}! ${attacked} lost ${damage} HP!`
// Por ejemplo:

// "Squirtle used Water Gun! Pikachu lost 12 HP!"
// Si el pokémon es débil contra el tipo de su atacante, se debe agregar It's super effective!, si es resistente, se debe agregar It's not very effective!, por ejemplo:

// "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"

const getAttackLog = ({attacker, attacked, move, damage, modifier}) => {

    let message = `${attacker} used ${move}! ${attacked} lost ${damage} HP!`
    if (modifier === "weak"){
        return message +=`It's super effective!`
    } else if (modifier === "resistant"){
        return message  +=`It's not very effective!`
    } else {
        return message
    }
}

const cualquierCosa = 
{
    attacker: "Pikachu", attacked: "Squirtle", move: "Water Gun", damage: 12,
    modifier: "resistant" // otros valores: "resistant", "normal"
}

// calculateDamage()
// Crear una función calculateDamage que tome como un argumento un objeto con la siguientes propiedades
// attack es el ataque del pokémon que ataca
// defense es la defensa del pokémon siendo atacado
// modifier el modificador del daño según el tipo del atacante y del atacado y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula:
// 0.5 * attack * (attack / defense) * modifier

const calculateDamage = ({stats:{attack}}, {stats:{deffense}}, modifier) => {
    
    return Math.round(0.5 * attack * (attack / deffense) * modifier)
}



