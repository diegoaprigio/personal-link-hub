import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import CreateLinkDto from '../dto/createLink.dto';
import LinksService from '../services/links.service';
import { ApiOkResponse } from '@nestjs/swagger';
import LinkResponse from 'src/types/LinkResponse';
import ErrorResponse from 'src/types/ErrorResponse';
import ListLinksResponse from 'src/types/ListLinksResponse';

@Controller('api/v1/links')
export default class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get('/get/:userId')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Links by userId retrieved successfully!',
    type: LinkResponse,
  })
  public async getLinks(
    @Param('userId') userId: string,
  ): Promise<ListLinksResponse | ErrorResponse> {
    return await this.linksService.getLinks(userId);
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    description: 'Link created successfully!',
    type: LinkResponse,
  })
  public async createLink(
    @Body() linkData: CreateLinkDto,
  ): Promise<LinkResponse | ErrorResponse> {
    return await this.linksService.createLink(linkData);
  }

  @Put('/update')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Link updated successfully!',
    type: LinkResponse,
  })
  public async updateLink(
    @Body() linkData: CreateLinkDto,
  ): Promise<LinkResponse | ErrorResponse> {
    return await this.linksService.updateLink(linkData);
  }

  @Delete('/delete/:linkId')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Link deleted successfully!',
    type: LinkResponse,
  })
  public async deleteLink(@Param('linkId') linkId: string): Promise<void> {
    return await this.linksService.deleteLink(linkId);
  }
}
