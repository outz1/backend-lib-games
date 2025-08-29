import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuração do CORS para permitir requisições do frontend
  app.enableCors({
    origin: 'http://localhost:3000', // URL do frontend Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3001); // Usando porta 3001 para não conflitar com o Next.js
}
bootstrap();
