const Joi = require('joi');

// Esquema para ID (UUID v4)
const idSchema = Joi.object({
  id: Joi.string().guid({ version: 'uuidv4' }).required().messages({
    'string.guid': 'El ID debe ser un UUID válido'
  })
});

// Esquema para Crear (POST)
const createCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().max(150).required(),
  imgCategory: Joi.string().max(200).required(),
  state: Joi.string().valid('Activo', 'Inactivo').required()
});

// Esquema para Actualizar (PUT) - Parcial
const updateCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50),
  description: Joi.string().max(150),
  imgCategory: Joi.string().max(200),
  state: Joi.string().valid('Activo', 'Inactivo')
}).min(1);

// Esquema para Búsqueda
const searchSchema = Joi.object({
  search: Joi.string().min(1).max(50).optional()
});

module.exports = {
  idSchema,
  createCategorySchema,
  updateCategorySchema,
  searchSchema
};