import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import SwaggerDocumentationProvider from './providers/SwaggerDocumentationProvider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDocProvider = app.get(SwaggerDocumentationProvider);
  swaggerDocProvider.setupSwagger(app);

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
