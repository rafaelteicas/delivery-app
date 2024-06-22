import { app } from './infra/configs/app'
import { env } from './infra/configs/env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`http://localhost:${env.PORT}`)
  })
