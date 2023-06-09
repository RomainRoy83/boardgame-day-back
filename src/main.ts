import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

require('dotenv').config()

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  await app.listen(process.env.PORT)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
