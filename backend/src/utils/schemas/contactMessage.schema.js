const Joi = require('joi');

const id = Joi.string().guid({ version: 'uuidv4' });

const createContactMessageSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(10).max(1000).required(),
});

const getContactMessageSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createContactMessageSchema,
  getContactMessageSchema,
};
