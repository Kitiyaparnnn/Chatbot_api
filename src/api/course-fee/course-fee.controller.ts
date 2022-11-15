import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CourseFeeService } from './course-fee.service';

@Controller("/api/course-fee")
export class CourseFeeController {
  constructor(private readonly courseFeeService: CourseFeeService) {}
  
  @Get()
  async getCourseFee() {
    return await this.courseFeeService.getCourseFee();
  }
}