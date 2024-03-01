import userModel from '../models/user.model';
import User from '../models/user.model';

//create new user
export const newUser = async (body) => {
  const user = await User.findOne({email:body.email});
  if(user){
    throw Error("user alredy exists")
  }
  const data = await User.create(body);
  return data;

};

