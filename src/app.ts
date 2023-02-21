import cacheExternal from './utils/cache_external'
import db from '@marvel/utils/db'
import logger from '@marvel/utils/logger'
import {createServer} from '@marvel/utils/server'

cacheExternal.open()
  .then(() => db.open())
  .then(() => createServer())
  .then(server => {
    server.listen(3000, () => {
      logger.info(`Listening on http://localhost:3000`)
    })
  })
  .catch(err => {
    logger.error(`Error: ${err}`)
  })
