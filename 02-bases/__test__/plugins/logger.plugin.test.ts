import buildLogger, { logger as winstonLogger } from '../../src/plugins/logger.plugin'

describe('Tests in plugins/logger.plugin.ts', () => {
  test('buildLogger should return a function logger', () => {
    const logger = buildLogger('test')
    expect(typeof logger.log).toBe('function')
    expect(typeof logger.error).toBe('function')
  })

  test('logger.log should log a message', () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log')
    const message = 'Test message'
    const service = 'Test service'

    const logger = buildLogger(service)
    logger.log(message)
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      // se utiliza para especificar que al menos deben de venir esos elementos en el objeto
      expect.objectContaining({
        level: 'info',
        message,
        service
      })
    )
  })
})
