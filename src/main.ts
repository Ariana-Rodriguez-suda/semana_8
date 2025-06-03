import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); // habilita CORS aqui
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
