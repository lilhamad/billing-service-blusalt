import joi from '@hapi/joi';
import JoiDate from '@hapi/joi-date';

const Joi = joi.extend(JoiDate);

export const verifyTransactionSchema = Joi.array().items(Joi.object().keys({ 
  customerId: Joi.string().required(),
  amount: Joi.string().required(),
})) 

