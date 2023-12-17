import { CreateTable } from '../domain/use-cases/create-table.usecase'
import { SaveFile } from '../domain/use-cases/save-file.usecase'

/* eslint-disable @typescript-eslint/no-extraneous-class */
interface RunOptions {
  base: number
  limit: number
  showTable: boolean
  fileName: string
  fileDestination?: string
}

export class ServerApp {
  static run ({ base, limit, showTable, fileDestination, fileName }: RunOptions): void {
    console.log('Server running...')
    const table = new CreateTable().execute({ base, limit })
    new SaveFile().execute({ fileContent: table, destinationPath: fileDestination, fileName })
    if (showTable) { console.log(table) }
  }
}
