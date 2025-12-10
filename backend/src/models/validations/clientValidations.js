const Joi = require('joi')

const now = new Date()

// calcular la fecha mínima de nacimiento (18 años atrás)
const minBirthdate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate())

const ClientValidator = Joi.object({
  firstName: Joi
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
  lastName: Joi
    .string()
    .pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.base': 'El apellido debe ser una cadena de texto',
      'string.empty': 'El apellido no puede estar vacío',
      'string.min': 'El apellido debe tener mínimo 2 caracteres',
      'string.max': 'El apellido no puede tener más de 50 caracteres',
      'string.pattern.base': 'El apellido solo puede contener letras y espacios',
      'any.required': 'El apellido es requerido'
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
    .min(8)
    .max(100)
    .pattern(/^\+\d{7,15}$/)
    .messages({
      'string.base': 'El télefono de ser una cadena de caracteres',
      'string.empty': 'El télefono no puede estar vacio',
      'string.min': 'El télefono debe contener minimo 9 caracteres',
      'string.max': 'El télefono solo puede contener máximo 9 caracteres',
      'string.pattern.base': 'Ingrese un télefono válido con código de país, ejemplo: +123456789',
      'any.required': 'El télefono es requerido'
    }),
  birthdate: Joi
    .date()
    .less(minBirthdate)
    .required()
    .messages({
      'date.base': 'La fecha de nacimiento debe ser una fecha válida',
      'date.less': 'Debes ser mayor de 18 años',
      'any.required': 'La fecha de nacimiento es requerida'
    }),
  gender: Joi
    .valid('M', 'F', 'O')
    .required()
    .messages({
      'any.only': 'El género debe ser M, F u O',
      'any.required': 'El género es requerido'
    }),
  address: Joi
    .string()
    .pattern(/^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\s.]+$/)
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.base': 'La dirección debe ser una cadena de texto',
      'string.empty': 'La dirección no puede estar vacía',
      'string.min': 'La dirección debe tener mínimo 3 caracteres',
      'string.max': 'La dirección no puede tener más de 100 caracteres',
      'string.pattern.base': 'La dirección solo puede contener letras, números, espacios y puntos',
      'any.required': 'La dirección es requerida'
    }),
  password: Joi
    .string()
    .min(8)
    .max(35)
    .required()
    .pattern(/^(?=(.*[A-Z]))(?=(.*\d.*\d)).+$/)
    .messages({
      'string.base': 'La contraseña debe de ser una cadena de caracteres',
      'string.empty': 'La contraseña no puede estar vacia',
      'string.min': 'La contraseña debe contener minimo 8 caracteres',
      'string.max': 'La contraseña solo puede contener máximo 35 caracteres',
      'string.pattern.base': 'La contraseña debe contar con mínimo una letra mayuscula y dos números',
      'any.required': 'La contraseña es requerida'
    }),
  repassword: Joi
    .required()
    .valid(Joi.ref('password'))
    .messages({
      'any.only': 'Las contraseñas no coinciden',
      'any.required': 'La confirmación de la contraseña es requerida'
    })

})

module.exports = { ClientValidator }
