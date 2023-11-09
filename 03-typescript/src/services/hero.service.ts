import { Hero, heroes } from '../data/heroes'

export const findHeroById = (id: number): Hero | undefined => {
  return heroes.find(hero => hero.id === id)
}
