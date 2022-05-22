import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Running at http://localhost:3090')
  await app.listen(3090);

}
bootstrap();
