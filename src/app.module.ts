import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // imports: [MongooseModule.forRoot('mongoose://link')],
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
