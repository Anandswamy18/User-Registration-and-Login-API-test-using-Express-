import Joi, { number } from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().min(4).required(),
    last_name:Joi.string().min(4).required(),
    email:Joi.string().min(4).required(),
    password: Joi.string().min(4).required()

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }

  
};


export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email:Joi.string().min(4).required(),
    password: Joi.string().min(4).required()

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }

  
};

