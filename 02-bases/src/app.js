const {buildMakePerson} = require('./js-foundation/05-factory')
const {getAge,getUUID} = require('../plugins')
const obj = {name: 'John', birthdate: '2002-11-24'}

const buildPerson = buildMakePerson({getUUID, getAge})
const john = buildPerson(obj)
console.log(john);