import { getUUID } from '../../src/plugins'

describe('Tests in plugins/get-id.plugin.ts', () => {
  test('getUUID should return a string', () => {
    const uuid = getUUID()
    expect(typeof uuid).toBe('string')
    expect(uuid.length).toBe(36)
  })
})
