import Joi from "joi"

const messageValidator = Joi.object({
  name: Joi
    .string()
    .pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.base': 'El nombre debe ser una cadena de texto',
      'string.empty': 'El nombre no puede estar vacío',
      'string.min': 'El nombre debe tener mínimo 2 caracteres',
      'string.max': 'El nombre no puede tener más de 50 caracteres',
      'string.pattern.base': 'El nombre solo puede contener letras y espacios',
      'any.required': 'El nombre es requerido'
    }),
  email: Joi
    .string()
    .min(8)
    .max(100)
    .pattern(/^[a-zA-Z0-9._%+-áéíóúÁÉÍÓÚñÑ]+@(gmail\.com|hotmail\.com|yahoo\.com)$/)
    .required()
    .messages({
      'string.base': 'El correo de ser una cadena de caracteres',
      'string.empty': 'El correo no puede estar vacio',
      'string.min': 'El correo debe contener minimo 8 caracteres',
      'string.max': 'El correo solo puede contener máximo 100 caracteres',
      'string.pattern.base': 'Ingrese un correo válido (gmail, hotmail, yahoo) (.com)',
      'any.required': 'El correo es requerido'
    }),
  phone: Joi
    .string()
    .required()
    .pattern(/^[0-9]{9}$/)
    .messages({
      'string.base': 'El teléfono debe ser una cadena de caracteres',
      'string.empty': 'El teléfono no puede estar vacío',
      'string.pattern.base': 'El teléfono debe contener exactamente 9 dígitos',
      'any.required': 'El teléfono es requerido'
    }),
  message: Joi
    .string()
    .max(500)
    .allow('')
    .optional()
    .messages({
      'string.base': 'El mensaje debe ser texto',
      'string.max': 'El mensaje no puede exceder 500 caracteres'
    })
})

export { messageValidator }
