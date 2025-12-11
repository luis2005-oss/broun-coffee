const Joi = require('joi');

const idSchema = Joi.object({
  id: Joi.number().integer().positive().required()
});

const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().max(200).required(),
  price: Joi.number().precision(2).positive().required(),
  img: Joi.string().required(),
  stock: Joi.number().integer().min(0).default(0),
  state: Joi.string().valid('Activo', 'Inactivo').required(),
  // categoryId: Joi.string().guid({ version: 'uuidv4' }).optional()
});

const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  description: Joi.string().max(200),
  price: Joi.number().precision(2).positive(),
  img: Joi.string(),
  stock: Joi.number().integer().min(0),
  state: Joi.string().valid('Activo', 'Inactivo')
}).min(1);

const searchSchema = Joi.object({
  search: Joi.string().min(1).max(50).optional()
});

module.exports = {
  idSchema,
  createProductSchema,
  updateProductSchema,
  searchSchema
};