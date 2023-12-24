import { SaveFile, SaveFileOptions } from '../../../src/domain/use-cases/save-file.usecase'
import fs from 'node:fs'

describe('Tests in save-file', () => {
  const customOptions: SaveFileOptions = {
    fileContent: 'custom default values',
    fileName: 'custom-table-name',
    destinationPath: 'custom-outputs'
  }

  beforeEach(() => {
    const checkFile = fs.existsSync('outputs')
    if (checkFile) {
      fs.rmSync('outputs', { recursive: true })
    }

    const checkCustomFile = fs.existsSync(customOptions.destinationPath as string)
    if (checkCustomFile) {
      fs.rmSync(customOptions.destinationPath ?? '', { recursive: true })
    }
    jest.clearAllMocks()
  })

  test('should save files with default values', () => {
    const saveFile = new SaveFile()
    const options: SaveFileOptions = {
      fileContent: 'Test content'
    }
    const filePath = 'outputs/tables.txt'
    const result = saveFile.execute(options)
    expect(result).toBeTruthy()

    const checkFile = fs.existsSync(filePath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    expect(checkFile).toBeTruthy()
    expect(fileContent).toBe(options.fileContent)
  })

  test('should save files with custom values', () => {
    const basePath = `${customOptions.destinationPath as string}/${customOptions.fileName as string}.txt`
    const saveFile = new SaveFile()
    const result = saveFile.execute(customOptions)
    const checkFile = fs.existsSync(basePath)
    const fileContent = fs.readFileSync(basePath, { encoding: 'utf8' })

    expect(result).toBeTruthy()
    expect(checkFile).toBeTruthy()
    expect(fileContent).toBe(customOptions.fileContent)
  })

  test('should return false if directory could not be created', () => {
    const saveFile = new SaveFile()
    const mkdirSpyMock = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('error reading file')
    })
    const result = saveFile.execute(customOptions)
    expect(result).toBeFalsy()
    expect(mkdirSpyMock).toHaveBeenCalled()

    mkdirSpyMock.mockRestore()
  })

  test('should return false if file could not be created', () => {
    const saveFile = new SaveFile()
    const fileSpyMock = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      throw new Error('error creating file')
    })
    const result = saveFile.execute(customOptions)
    expect(result).toBeFalsy()
    expect(fileSpyMock).toHaveBeenCalled()
    fileSpyMock.mockRestore()
  })
})
