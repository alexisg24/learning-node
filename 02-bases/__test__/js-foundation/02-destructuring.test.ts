import { characters } from '../../src/js-foundation/02-destructuting'

describe('Tests in js-foundation/02-destructuring', () => {
  test('characters should contain Flash and Superman', () => {
    expect(characters).toContain('Flash')
    expect(characters).toContain('Superman')
  })

  test('First character should be Flash, and Second Superman', () => {
    const [flash, superman] = characters
    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')
  })
})
