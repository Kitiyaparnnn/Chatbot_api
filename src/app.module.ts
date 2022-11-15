import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseFeeModule } from './api/course-fee/course-fee.module';
import env from './common/env.config';

@Module({
  imports: [
    MongooseModule.forRoot(env.DATABASE_URL),
    CourseFeeModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
