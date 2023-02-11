import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { CourseFeeSchema } from 'src/model/course-fee.model';
import { CourseFeeController } from './course-fee.controller';
import { CourseFeeService } from './course-fee.service';

@Module({
  // imports: [ MongooseModule.forFeature([{ name: "course_fee", schema: CourseFeeSchema }]) ],
  controllers: [ CourseFeeController ],
  providers: [ CourseFeeService ],
})

export class CourseFeeModule {}
