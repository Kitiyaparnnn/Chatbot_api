import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkNull(req: Record<string, any>){
    if(req.ชั้นปี == null) return { isNull: 0 };
    else return { isNull: 1 };
  }
}
