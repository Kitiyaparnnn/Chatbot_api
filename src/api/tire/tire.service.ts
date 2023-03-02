import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { map } from 'rxjs';
import * as https from 'https';
import * as jquery from 'jquery';

@Injectable()
export class TireService {
  constructor(private readonly httpService: HttpService) {
  }

  
  getHello(): string {
    return 'Hello World!';
  }

  checkConYear1(grade: any){
   let ans = ""
    try { 
        
      var g = Number(grade);
      if(g<1.5){
        ans = "ไทร์จ้า😭"
      }
      else ans = "ยังรอดอยู่จ้า 💖"
    
      return { ans: ans , sum: g.toFixed(2) }

    } catch(err) {
      console.log("err");
      
    }
  }

  checkConYear2(grade: any){
    let ans = ""
     try { 
       const g = Number(grade);
       if(g<1.75){
         ans = "ไทร์จ้า😭"
       }
       else ans = "ยังรอดอยู่จ้า 💖"
       
       return { ans: ans , sum: g.toFixed(2)}
 
     } catch(err) {
       console.log("err");
       
     }
   }

   checkCon(year:number,grade: number,credit1: number,credit2: number){
    console.log({year,grade,credit1,credit2});
    
    let tag = 0
    let pre_grade = 0
    let pre_credit = 0

    const a = credit1 + credit2

    try { 
      if(year == 1){
        pre_grade = (1.5*(a) - (credit1*grade)) / credit2
        if(pre_grade <= 4.00)tag = 10
        else tag = 11
      }
      else if(year == 2){
        pre_grade = (1.75*(a) - (credit1*grade)) / credit2
        if(pre_grade <= 4.00) tag = 10
        else tag = 11
      }
      else if(year >= 3 && year <=7){
        const b = (2.00*(a) - (credit1*grade))/credit2
        const c = (1.75*(a) - (credit1*grade))/credit2
        const d = 239 - credit1
        const e = (2.00*(credit1 + d + 22) - (credit1*grade))/(d + 22)

        if(credit1 >= 240) tag = 0
        else if(a >= 240 && b <= 4.00){
          tag = 302
          pre_grade = b
        }
        else if(a >= 240 && b > 4.00 && e <= 4.00){
          tag = 310
          pre_grade = e
          pre_credit = d
        }
        else if(a >= 240 && b < 4.00 && e > 4.00) tag = 99
        else if(a < 240 && grade < 1.75 && c <= 4.00){
          tag = 10
          pre_grade = c
        } 
        else if(a < 240 && grade >= 1.75) tag = 300
        else tag = 555
      }
      else {
        pre_grade = (2.00*(a) - (credit1*grade))/credit2

        if(credit1 >= 240) tag = 0
        else if(pre_grade <= 4.00) tag = 80
        else if(pre_grade > 4.00) tag = 99
        else tag = 555
      }

      
       return { tag: tag, pre_grade: pre_grade.toFixed(2), pre_credit:pre_credit}
 
     } catch(err) {
       console.log("err");
       
     }
   }

   async getData(year:number,std: String) {

    const agent = new https.Agent({  
      rejectUnauthorized: false
    });

    const path = `https://reg.eng.cmu.ac.th/reg/plan_detail/plan_data_term.php?student_id=${std}`

    const data = await this.httpService.get(path,{httpsAgent: agent}).toPromise();
    const text = data.data.replace(/(<([^>]+)>)/ig, '')
    const clean = text.replace(/&nbsp;/gi,'').split(/\r?\n/)  
    let clean2 = clean.map(e => e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,''));
    let clean3 = clean2.filter(e => e != '')
    const key = clean3.indexOf('หมายเหตุ วิชาที่เกรดเป็นเครื่องหมาย')
    const d = [Number(clean3[key-3]),Number(clean3[key-2]),Number(clean3[key-1])]
    console.log(d);
    
    return  this.checkCon(year,d[2],d[0],d[0]-d[1]);
  }
}

