import { Document } from 'mongoose';

export interface CourseFee extends Document {
  readonly EE_reg: string;
  readonly EE_sup: string;
  readonly Major: string;
}
