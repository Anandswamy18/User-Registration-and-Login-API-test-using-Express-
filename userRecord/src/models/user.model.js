
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required:true
    },
    last_name: {
      type: String,
      required:true
    },
    email: {
      type: String,
      required:true
    },
    password:{
      type:String,
      reuired:true
    }
    
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
