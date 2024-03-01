import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

export const newUser = async (req, res, next) => {
  try {
   
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User registerd successfully'

    });
  } catch (error) {
    next(error);
  }
};


export const login = async (req, res, next) => {
  try {
   
    const data = await UserService.login(req.body.email,req.body.password);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User LoggedIn successfully'

    });
  } catch (error) {
    next(error);
  }
};


