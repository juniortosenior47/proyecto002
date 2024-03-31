import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { CORS } from './constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  
  app.enableCors(CORS);

  app.use(morgan('dev'));
  
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      }
    })
  );

  app.setGlobalPrefix('api');

  await app.listen(configService.get('PORT'));
  console.log(`Application runnig on: ${ await app.getUrl()}`);
} 
bootstrap();
