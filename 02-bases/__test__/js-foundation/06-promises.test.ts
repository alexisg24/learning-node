import { getPokemonById } from '../../src/js-foundation/06-promises'

describe('Tests in js-foundation/06-promises', () => {
  test('getPokemonById should return a pokemom', async () => {
    const pokemonId = 1
    const pokemon = await getPokemonById(pokemonId)
    expect(pokemon).toBe('bulbasaur')
  })

  test('getPokemonById should return an error if pokemon does not exist', async () => {
    const pokemonId = 10000000000000
    try {
      await getPokemonById(pokemonId)
      expect(true).toBeFalsy()
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
    }
  })
})
