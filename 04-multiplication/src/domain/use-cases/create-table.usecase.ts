/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-useless-constructor */

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string
}

export interface CreateTableOptions {
  base: number
  limit?: number
}
export class CreateTable implements CreateTableUseCase {
  constructor (
    /**
  * DI - Dependencie Injection
  */
  ) {}

  execute ({ base, limit = 10 }: CreateTableOptions): string {
    let announce = ''
    for (let i = 1; i <= limit; i++) {
      announce += `${base} x ${i + 1} = ${base * (i + 1)}`
      if (i < limit) {
        announce += '\n'
      }
    }
    return announce
  }
}
