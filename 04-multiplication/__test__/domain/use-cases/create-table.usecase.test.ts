import { CreateTable, CreateTableOptions } from '../../../src/domain/use-cases/create-table.usecase'

describe('Tests in Create-Table Usecase', () => {
  test('should create table with default values', () => {
    const defaultOptions: CreateTableOptions = { base: 2 }
    const createTable = new CreateTable()
    const table = createTable.execute(defaultOptions)

    expect(createTable).toBeInstanceOf(CreateTable)
    expect(table.split('\n').length).toBe(10)
  })

  test('should create table with custom values', () => {
    const defaultOptions: CreateTableOptions = { base: 2, limit: 20 }
    const createTable = new CreateTable()
    const table = createTable.execute(defaultOptions)
    expect(table).toContain('2 x 20 = 40')
    expect(table.split('\n').length).toBe(20)
  })
})
