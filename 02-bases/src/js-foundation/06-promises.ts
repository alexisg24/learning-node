/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { httpClientPlugin } from '../plugins'

const getPokemonById = async (id: any) => {
  const url = `http://pokeapi.co/api/v2/pokemon/${id}`
  const data = await httpClientPlugin.get(url)
  return data.name
}

export default getPokemonById
