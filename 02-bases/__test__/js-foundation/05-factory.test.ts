/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { buildMakePerson } from '../../src/js-foundation/05-factory'

describe('Tests in js-foundation/05-factory', () => {
  const getUUID = () => '1234'
  const getAge = () => 35
  test('Should return a function', () => {
    const makePerson = buildMakePerson({ getUUID, getAge })
    expect(typeof makePerson).toBe('function')
  })

  test('makePerson should return a Person', () => {
    const makePerson = buildMakePerson({ getUUID, getAge })
    const johnDoe = makePerson({ name: 'JohnDoe', birthdate: '2002-11-24' })
    expect(johnDoe).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      birthdate: expect.any(String),
      age: expect.any(Number)
    })
  })
})
