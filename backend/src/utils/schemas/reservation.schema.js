const Joi = require('joi');

const id = Joi.string().guid({ version: 'uuidv4' });

const createReservationSchema = Joi.object({
  customerName: Joi.string().min(3).max(100).required(),
  customerEmail: Joi.string().email().required(),
  customerPhone: Joi.string().pattern(/^[0-9]{9,15}$/).required(),
  numberOfPeople: Joi.number().integer().min(1).max(20).required(),
  reservationDate: Joi.date().greater('now').required(),
});

const updateReservationSchema = Joi.object({
  status: Joi.string().valid('pending', 'confirmed', 'cancelled'),
});

const getReservationSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createReservationSchema,
  updateReservationSchema,
  getReservationSchema,
};
