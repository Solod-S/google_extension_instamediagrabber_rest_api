import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as packageJson from '../package.json';
import '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middleware/system/logger.middleware';
import { CorsMiddleware } from './middleware/system/corsMiddleware.middleware';

ConfigModule.forRoot();

const PORT = process.env.PORT || 1212;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(new LoggerMiddleware().use);
  app.use(new CorsMiddleware().use);

  const config = new DocumentBuilder()
    .setTitle('InstaMediaGraber API')
    .setDescription(
      'The API is designed to retrieve links for downloading Instagram photos and videos.',
    )
    .setVersion(packageJson.version)
    .addApiKey(
      {
        type: 'apiKey',
        name: 'X-API-KEY',
        in: 'header',
        description: 'Enter your API key',
      },
      'X-API-KEY',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // http://localhost:1234/api
  // http://localhost:1234/api-json
  await app.listen(PORT);
}

bootstrap().then(() =>
  Logger.log(`APP IS STARTED AT http://localhost:${PORT}/`),
);

// nest g mo users
// генерируем модуль пользователя
// nest g s users
// генерируем сервис пользователя
// nest g co users
// генерируем контролер пользователя
