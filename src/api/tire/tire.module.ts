import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TireController } from './tire.controller';
import { TireService } from './tire.service';


@Module({
  imports: [HttpModule],
  // imports: [ MongooseModule.forFeature([{ name: "course_fee", schema: CourseFeeSchema }]) ],
  controllers: [ TireController ],
  providers: [ TireService],
})

export class TireModule {}
