/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import fs from 'node:fs'
export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean
}

export interface SaveFileOptions {
  fileContent: string
  destinationPath?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor (
    /**
    * repository: StorageRepository
    */
  ) {}

  execute ({
    fileContent,
    destinationPath = 'outputs',
    fileName = 'tables'
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(`${destinationPath}`, { recursive: true })
      fs.writeFileSync(`${destinationPath}/${fileName}.txt`, fileContent, 'utf8')
      return true
    } catch (error) {
      return false
    }
  }
}
