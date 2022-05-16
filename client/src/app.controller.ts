import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  private logger = new Logger('appController');

  @Get('/greeting')
  async getHello() {
    return this.appService.getHello();
  }

  @Get('/greeting-async')
  async getHelloAsync() {
    return this.appService.getHelloAsync();
  }

  @Post('/add')
  async accumulate(@Body('data') data: any) {
    this.logger.log('adding' + data);
    return this.appService.accumulate(data);
  }
}
