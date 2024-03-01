
import { Schema, model } from 'mongoose';

const bcrypt = require('bcrypt')
const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      reuired: true
    }

  },
  {
    timestamps: true
  }
);
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(this.password, salt);
    this.password=hashPassword;
    
  }
  catch (error) {
    next(error)
  }
})
export default model('User', userSchema);
