import { HttpStatus, Injectable } from '@nestjs/common';
import { Link } from 'generated/prisma';
import CreateLinkDto from 'src/dto/createLink.dto';
import LinksRepository from 'src/repositories/links.repository';
import ErrorResponse from 'src/types/ErrorResponse';
import LinkResponse from 'src/types/LinkResponse';

@Injectable()
export default class LinksService {
  constructor(private readonly linksRepository: LinksRepository) {
    console.log('LinksRepository instance:', this.linksRepository);
  }

  public async createLink(
    linkData: CreateLinkDto,
  ): Promise<LinkResponse | ErrorResponse> {
    try {
      const newLink = await this.linksRepository.createLink({
        ...linkData,
        order: linkData.order ?? 0,
      });
      return {
        status: HttpStatus.CREATED,
        message: 'Link created successfully!',
        data: newLink,
      };
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : 'Unknown error';
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `Error creating link: ${errorMessage}`,
      };
    }
  }

  public async updateLink(
    linkData: CreateLinkDto,
  ): Promise<LinkResponse | ErrorResponse> {
    try {
      const updatedLink = await this.linksRepository.updateLink({
        ...linkData,
        order: linkData.order ?? 0, // Ensure 'order' is a number
      });
      if (!updatedLink) {
        return {
          status: HttpStatus.NOT_FOUND,
          error: 'Link not found',
        };
      }
      return {
        status: HttpStatus.OK,
        message: 'Link updated successfully!',
        data: updatedLink,
      };
    } catch (error) {
      const errorMessage: string =
        error instanceof Error ? error.message : 'Unknown error';
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `Error updating link: ${errorMessage}`,
      };
    }
  }
  // async getLinks(userId: string): Promise<Link[] | undefined> {
  //   try {
  //     const links = await this.linksRepository.find({ userId });
  //     return {
  //       status: HttpStatus.OK,
  //       message: 'Links retrieved successfully!',
  //       data: links,
  //     };
  //   } catch (error) {
  //     return {
  //       status: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: 'Error retrieving links',
  //       error,
  //     };
  //   }
  // }

  public async deleteLink(linkId: string): Promise<void> {
    try {
      await this.linksRepository.deleteLink(linkId);
    } catch (error) {
      throw new Error(`Error deleting link: ${error}`);
    }
  }
}
