import * as mongoose from 'mongoose';

export const CourseFeeSchema = new mongoose.Schema({
    EE_reg: String,
    EE_sup: String,
    Major: String,
  });