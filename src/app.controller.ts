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
  checkNull(@Param("year") year: any){
    
    // if(req.ชั้นปี === "") {
    //   req.ชั้นปี = null;
    // }
    
    // console.log(year);
    
    return this.appService.checkNull(year);
  }

}
