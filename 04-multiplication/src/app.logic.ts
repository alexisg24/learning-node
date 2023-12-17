import fs from 'node:fs/promises'
import path from 'node:path'
import { yarg } from './config/plugins/args.plugin'

const multiplication = ({ base, limit, show }: { base: number, limit: number, show: boolean }): void => {
  const lines = '='.repeat(15)
  const title = `  Tabla del ${base}`
  let announce = `${lines}\n${title}\n${lines}\n`

  for (let i = 0; i < limit; i++) {
    announce += `${base} x ${i + 1} = ${base * (i + 1)}\n`
  }
  fs.writeFile(path.join(__dirname, 'outputs', `tabla-${base}.txt`), announce, 'utf8')
    .then(() => {
      if (show) {
        console.log(announce)
      }
    })
    .catch((err) => {
      console.error('Error writting file', err)
    })
}

multiplication({
  base: yarg.b,
  limit: yarg.l,
  show: yarg.s
})
