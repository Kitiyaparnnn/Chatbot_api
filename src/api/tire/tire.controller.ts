import { Controller, Get, Post, Body, Param,Query } from '@nestjs/common';
import { TireService } from './tire.service';


@Controller("/api")
export class TireController {
  constructor(private readonly TireService: TireService) {}

  @Get("/con_y1/:grade")
  checkConYear1(@Param("grade") grade: any){    
    return this.TireService.checkConYear1(grade);
  }

  @Get("/con_y2/:grade")
  checkConYear2(@Param("grade") grade: any){    
    return this.TireService.checkConYear2(grade);
  }

  @Get("/con?")
  async checkCon(@Query("year") year: number,
                @Query("grade") grade:number,
                @Query("credit1") credit1:number,
                @Query("credit2") credit2:number){    
    return this.TireService.checkCon(Number(year),Number(grade),Number(credit1),Number(credit2));
  }
}