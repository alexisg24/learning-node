import { getAge } from '../../src/plugins/get-age.plugin'

describe('Tests in plugins/get-age.ts', () => {
  test('getAge should return the age of a person', () => {
    const birthdate = '2002-11-24'
    const age = getAge(birthdate)
    expect(typeof age).toBe('number')
  })

  test('getAge should return current age', () => {
    const birthdate = '2002-11-24'
    const age = getAge(birthdate)
    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear()
    expect(age).toBe(calculatedAge)
  })

  // SpyOn
  test('getAge should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995)
    const birthdate = '2002-11-24'
    const age = getAge(birthdate)
    expect(age).toBe(0)
    expect(spy).toHaveBeenCalled()
  })
})
