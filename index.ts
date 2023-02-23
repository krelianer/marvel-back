import { createServer } from './src/utils/server'

createServer()
    .then(server => { })
    .catch(err => {
        console.error(`Error: ${err}`)
    })