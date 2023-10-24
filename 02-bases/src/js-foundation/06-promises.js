const {httpClientPlugin} = require('../../plugins')
const getPokemonById = async ( id ) => {
    const url = `http://pokeapi.co/api/v2/pokemon/${id}`
    const data = await httpClientPlugin.get( url )
    return data.name
}

module.exports = getPokemonById
