import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ItemModule,
    MongooseModule.forRoot(environment.MONGO_DB),
    ConfigModule.forRoot({
      load: [() => ({ environment })],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
