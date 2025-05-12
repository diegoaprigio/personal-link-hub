import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaHelper } from 'src/libs/prisma.helper';
import Link from 'src/types/Link';

@Injectable()
export default class LinksRepository {
  constructor(private readonly prisma: PrismaHelper) {}

  public async createLink(linkData: Link): Promise<Link> {
    const count = await this.prisma.link.count({
      where: { userId: linkData.userId },
    });

    return this.prisma.link.create({
      data: {
        ...linkData,
        id: randomUUID(),
        order: count + 1,
        logo: linkData.logo ?? '',
      },
    });
  }

  public async updateLink(linkData: Link): Promise<Link | null> {
    if (linkData.id) {
      const existing = await this.prisma.link.findUnique({
        where: { id: linkData.id },
      });

      if (existing) {
        return this.prisma.link.update({
          where: { id: linkData.id },
          data: linkData,
        });
      }
    }
    return null;
  }

  public async deleteLink(linkId: string): Promise<Link | null> {
    const existing = await this.prisma.link.findUnique({
      where: { id: linkId },
    });

    if (existing) {
      return this.prisma.link.delete({
        where: { id: linkId },
      });
    }
    return null;
  }
}
