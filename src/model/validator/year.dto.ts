import { Transform } from '@nestjs/class-transformer';
import { IsNumberString} from 'class-validator';

export class YearDto {
    // @Transform(({ val }) => val.is  )
    @Transform((val) => Number(val)  )
    @IsNumberString()
    year: string;
}