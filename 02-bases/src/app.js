// ! Ref to factory fn
// const {buildMakePerson} = require('./js-foundation/05-factory')
// const {getAge,getUUID} = require('../plugins')
// const obj = {name: 'John', birthdate: '2002-11-24'}

// const buildPerson = buildMakePerson({getUUID, getAge})
// const john = buildPerson(obj)
// console.log(john);

const getPokemonById = require('./js-foundation/06-promises')


const callFn = async () =>{
    const pokemonName = await getPokemonById(1)
    console.log(pokemonName);
}

callFn()