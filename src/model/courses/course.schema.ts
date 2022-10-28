import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type CourseDocument = Course & Document;

@Schema()
export class Course{
    @Prop()
    name: string;

    @Prop()
    cost: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);