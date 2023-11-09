/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { httpClientPlugin } from '../plugins'

export const getPokemonById = async (id: number) => {
  try {
    const url = `http://pokeapi.co/api/v2/pokemon/${id}`
    const data = await httpClientPlugin.get(url)
    return data.name
  } catch (error) {
    throw `Pokemon not found with id ${id}`
  }
}
