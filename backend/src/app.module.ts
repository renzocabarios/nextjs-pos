import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGO_DB),
    ConfigModule.forRoot({
      load: [() => ({ environment })],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
