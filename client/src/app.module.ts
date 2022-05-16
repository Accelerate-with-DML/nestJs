import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GREETING_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8080,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
