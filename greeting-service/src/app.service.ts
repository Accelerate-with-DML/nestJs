import { Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async accumulate(data: number) {
    const response = await this.prismaService.sum.create({
      data: {
        count: data,
      },
    });
    return response;
  }
}
