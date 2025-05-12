import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * A class to provide Swagger documentation for the application.
 */
@Injectable()
export default class SwaggerDocumentationProvider {
  private readonly SWAGGER_DOC_PATH = '/api/v1/swagger';

  constructor() {}
  public setupSwagger(app: INestApplication): void {
    const env = process.env.NODE_ENV || 'development';

    if (env === 'prod') {
      console.log('Swagger is disabled in production environment.');
      return;
    }

    const config = new DocumentBuilder()
      .setTitle('LinkHub - Personal Link Hub API')
      .setDescription('API documentation for LinkHub - Personal Link Hub')
      .setVersion('v1')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(this.SWAGGER_DOC_PATH, app, document);

    console.log({
      message: 'Swagger documentation is available at:',
      url: this.SWAGGER_DOC_PATH,
    });
  }
}
