import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get("/is-null/:year")
  checkNumber(@Param("year") year: any){    
    return this.appService.checkNumber(year);
  }

}
