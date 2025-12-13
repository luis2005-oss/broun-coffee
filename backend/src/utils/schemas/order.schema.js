const Joi = require('joi');

const id = Joi.string().guid({ version: 'uuidv4' });
const productId = Joi.string().guid({ version: 'uuidv4' });

const orderDetailSchema = Joi.object({
  productId: productId.required(),
  quantity: Joi.number().integer().min(1).required(),
  price: Joi.number().precision(2).positive().required(),
});

const createOrderSchema = Joi.object({
  total: Joi.number().precision(2).positive().required(),
  details: Joi.array().items(orderDetailSchema).min(1).required(),
});

const updateOrderSchema = Joi.object({
  status: Joi.string().valid('pending', 'completed', 'cancelled').required(),
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
};
