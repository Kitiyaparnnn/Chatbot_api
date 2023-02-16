import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';


@Injectable()
export class TireService {
  
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
    let ans = 0
    let pre_grade = 0
     try { 
       switch (year) {
        case 1:
          pre_grade = (1.5*(credit1+credit2) - (credit1*grade)) / credit2
          ans = 1
          // if(grade<1.5) ans ="โดนรีไทร์นะ 🥺"
          // else ans = "ยังไม่ไทร์นะ 😀"
          break;
        case 2:
          pre_grade = (1.75*(credit1+credit2) - (credit1*grade)) / credit2
          ans = 2
          // if(grade<1.75) ans ="โดนรีไทร์นะ 🥺🥺"
          // else ans = "ยังไม่ไทร์นะ 😀😀"
          break;
        case 3:
          pre_grade = (1.75*(credit1+credit2) - (credit1*grade)) / credit2
          if(grade < 1.75) ans = 31
          else ans = 30
          // if(grade<1.75) ans ="ถ้าต่ำกว่า 1.75 ติดกันมาแล้ว 2 เทอม โดนรีไทร์นะ 🥺🥺🥺"
          // else ans = "ยังไม่ไทร์นะ 😀😀😀"
          break;
        case 4:
          pre_grade = (1.75*(credit1+credit2) - (credit1*grade)) / credit2
          if(grade < 1.75) ans = 41
          else ans = 40
          break;
        default:
          pre_grade = (2.00*(credit1+credit2) - (credit1*grade)) / credit2
          ans = 240
          // if(grade<2.00) ans = "ไทร์จ้า"
          // else ans = "ยังไม่ไทร์ แต่อย่าให้ต่ำกว่า 2.00"
          break;
       }
       return { ans: ans, pre_grade: pre_grade.toFixed(2)}
 
     } catch(err) {
       console.log("err");
       
     }
   }
}

