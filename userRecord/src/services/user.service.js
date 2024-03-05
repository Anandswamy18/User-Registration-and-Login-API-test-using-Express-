import User from '../models/user.model';
const jwt = require("jsonwebtoken");

//create new user
export const newUser = async (body) => {
  const user = await User.findOne({email:body.email});
  if(user){
    throw Error("user alredy exists")
  }
  const data = await User.create(body);
  return data;

};

export const login = async(email,password)=>{
  const data = await User.findOne({email:email});
  if(!data){
    throw Error("user not found");
  }
  else if(data.password!=password){
    throw Error("incorrect password");
  }
  return jwt.sign({userId:data._id},process.env.SECRET_KEY);
}         