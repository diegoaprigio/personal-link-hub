import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import SwaggerDocumentationProvider from 'src/providers/SwaggerDocumentationProvider';
import { LinksModule } from './links.module';

@Module({
  imports: [LinksModule],
  controllers: [AppController],
  providers: [AppService, SwaggerDocumentationProvider],
})
export class AppModule {}
