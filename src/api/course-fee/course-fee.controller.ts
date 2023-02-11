import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CourseFeeService } from './course-fee.service';

@Controller("/api")
export class CourseFeeController {
  constructor(private readonly courseFeeService: CourseFeeService) {}
  
  // @Get()
  // async getCourseFee() {
  //   return await this.courseFeeService.getCourseFee();
  // }

  @Get("/test")
  getHello(): string {
    return this.courseFeeService.getHello();
  }

  @Get("/check/:year")
  checkNumber(@Param("year") year: any){    
    return this.courseFeeService.checkNumber(year);
  }
}