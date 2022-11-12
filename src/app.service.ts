import { Injectable } from '@nestjs/common';
import { YearDto } from './model/validator/year.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  changeToNumber(char: string){
     let nDic = new Map<string, number>(
      [
        ["หนึ่ง",1],
        ["สอง",2],
        ["สาม",3],
        ["สี่",4],
        ["ห้า",5],
        ["หก",6],
        ["เจ็ด",7],
        ["แปด",8],
        ["หนึ่งค่ะ",1],
        ["สองค่ะ",2],
        ["สามค่ะ",3],
        ["สี่ค่ะ",4],
        ["ห้าค่ะ",5],
        ["หกค่ะ",6],
        ["เจ็ดค่ะ",7],
        ["แปดค่ะ",8],
        ["หนึ่งครับ",1],
        ["สองครับ",2],
        ["สามครับ",3],
        ["สี่ครับ",4],
        ["ห้าครับ",5],
        ["หกครับ",6],
        ["เจ็ดครับ",7],
        ["แปดครับ",8],
      ]
    );
      let no = nDic.get(char)??0;
      return no;
  }

  checkNumber(year: any){
   
    try { 
      const nYear = Number(year);
      const ans = isNaN(nYear) ? this.changeToNumber(year) : nYear;
      // var regex = /\d+/g;
      // var matches = year. match(regex); // creates array from matches.
      // const ans = matches == null ? 0 : Number(matches);
​
      return { year: ans }

    } catch(err) {
      console.log("err");
      
    }
  }
}
