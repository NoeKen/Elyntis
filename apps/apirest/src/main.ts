import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // main.ts
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // enlève les champs inconnus
      forbidNonWhitelisted: true, // 400 si champ inconnu
      transform: true, // transforme en instance de DTO
    }),
  );

  await app.listen(process.env.PORT ?? 4000);
}
void bootstrap();
