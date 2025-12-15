const Joi = require('joi');

const idSchema = Joi.object({
  id: Joi.string().guid({ version: 'uuidv4' }).required().messages({
    'string.guid': 'El ID debe ser un UUID válido'
  })
});

const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().max(200).required(),
  price: Joi.number().precision(2).positive().required(),
  img: Joi.string().required(),
  stock: Joi.number().integer().min(0).default(0),
  state: Joi.string().valid('Activo', 'Inactivo').required(),
  // Aprovechamos de asegurar que categoryId sea obligatorio (según tu DB)
  categoryId: Joi.string().guid({ version: 'uuidv4' }).required()
});

const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  description: Joi.string().max(200),
  price: Joi.number().precision(2).positive(),
  img: Joi.string(),
  stock: Joi.number().integer().min(0),
  state: Joi.string().valid('Activo', 'Inactivo'),
  categoryId: Joi.string().guid({ version: 'uuidv4' })
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