const Joi = require('joi');

const id = Joi.string().guid({ version: 'uuidv4' });

const createPromotionSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  discountPercentage: Joi.number().min(0).max(100).required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref('startDate')).required(),
});

const updatePromotionSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  description: Joi.string().min(10),
  discountPercentage: Joi.number().min(0).max(100),
  startDate: Joi.date(),
  endDate: Joi.date().greater(Joi.ref('startDate')),
});

const getPromotionSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPromotionSchema,
  updatePromotionSchema,
  getPromotionSchema,
};
