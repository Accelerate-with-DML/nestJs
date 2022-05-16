import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(
    @Inject('GREETING_SERVICE') private client: ClientProxy,
    private prismaService: PrismaService,
  ) {}

  async getHello() {
    return this.client.send({ cmd: 'greeting' }, 'Progressive Coder');
  }
  public accumulate(data: number) {
    return this.client.send<number>('add', data);
  }
  async getHelloAsync() {
    const message = await this.client.send(
      { cmd: 'greeting-async' },
      'Progressive Coder',
    );
    return message;
  }
}
