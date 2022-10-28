import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get("/is-null")
  checkNull(@Body() req: Record<string, any>){
    
    // if(req.ชั้นปี === "") {
    //   req.ชั้นปี = null;
    // }
    
    console.log(req);
    
    return this.appService.checkNull(req);
  }

}
