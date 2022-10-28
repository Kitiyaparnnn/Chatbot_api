import { Injectable } from '@nestjs/common';
import { YearDto } from './model/validator/year.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkNull(year: YearDto){
    try { 
      // console.log(dto.year);
      const nYear = Number(year);
      const ans = isNaN(nYear) ? 0 : nYear;

      return { year: ans }

    } catch(err) {
      console.log("err");
      
    }
    // if(year.)return {isNumber: 0};
  }
}
