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
       
       return { ans: ans }
 
     } catch(err) {
       console.log("err");
       
     }
   }

   checkCon(year:number,grade: number){
    let ans = ""
     try { 
    //    const g = Number(grade);
       switch (year) {
        case 1:
            if(grade<1.5) ans ="โดนรีไทร์นะ 🥺"
            else ans = "ยังไม่ไทร์นะ 😀"
            break;
        case 2:
            if(grade<1.75) ans ="โดนรีไทร์นะ 🥺🥺"
            else ans = "ยังไม่ไทร์นะ 😀😀"
            break;
        case 3:
            if(grade<1.75) ans ="โดนรีไทร์นะ 🥺🥺🥺"
            else ans = "ยังไม่ไทร์นะ 😀😀😀"
            break;
        default:
            if(grade<2.00) ans = "ไทร์จ้า"
            else ans = "ยังไม่ไทร์ แต่อย่าให้ต่ำกว่า 2.00"
            break;
       }
       return { ans: ans, year :year, grade: grade}
 
     } catch(err) {
       console.log("err");
       
     }
   }
}

