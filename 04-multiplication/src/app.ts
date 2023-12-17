/* eslint-disable @typescript-eslint/no-floating-promises */
import { yarg } from './config/plugins/args.plugin'
import { ServerApp } from './presentation/server-app'

const main = async (): Promise<void> => {
  const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg
  ServerApp.run({ base, limit, showTable, fileName, fileDestination })
}

(async () => {
  await main()
})()
