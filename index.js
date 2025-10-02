import server from './src/app.js'
import { PORT } from './src/config/envs.js'
import { sq } from './src/lib/db.js'

sq.sync({
  logging: false,
  force: false,
  alter: true,
})
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening by port: ${PORT}`)
    })
    console.log('Base de datos conectada')
  })
  .catch((err) => {
    console.log(`Error en la conexión: ${err.message}`)
  })
