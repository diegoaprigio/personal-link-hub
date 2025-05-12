import { Module } from '@nestjs/common';
import LinksController from '../controllers/links.controller';
import LinksService from '../services/links.service';
import LinksRepository from 'src/repositories/links.repository';
import { PrismaHelper } from 'src/libs/prisma.helper';

@Module({
  imports: [],
  controllers: [LinksController],
  providers: [PrismaHelper, LinksService, LinksRepository],
})
export class LinksModule {}
