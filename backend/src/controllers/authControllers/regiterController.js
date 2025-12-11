const { ClientValidator } = require('../../models/validations/clientValidations')
const { clientRegister } = require('../../repositories/clientRepository')
const { hashPassword } = require('../../utils/bcryptUtils')

const registerController = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    birthdate,
    gender,
    address,
    password,
    repassword
  } = req.body

  try {
    // 1. Validación completa con Joi
    await ClientValidator.validateAsync({
      firstName,
      lastName,
      email,
      phone,
      birthdate,
      gender,
      address,
      password,
      repassword
    })

    // 2. Validación manual adicional (contraseñas coinciden)
    if (password !== repassword) {
      return res.status(400).json({
        message: 'Las contraseñas no coinciden.'
      })
    }

    // 3. Encriptar contraseña
    const hashedPassword = await hashPassword(password)

    // 4. Registrar (sin repassword)
    const newUser = await clientRegister(
      firstName,
      lastName,
      email,
      phone,
      birthdate,
      gender,
      address,
      hashedPassword,
      'C' // Rol por defecto
    )

    return res.status(201).json({
      message: 'Usuario Registrado Exitosamente.',
      userId: newUser.idUser
    })
  } catch (error) {
    console.log(error)

    // 5. Error de campos únicos (Sequelize)
    if (error?.name === 'SequelizeUniqueConstraintError') {
      const field = Object.keys(error.fields)[0]

      if (field === 'email') {
        return res.status(400).json({ message: 'El correo electrónico ya está en uso.' })
      }

      if (field === 'phone') {
        return res.status(400).json({ message: 'El número de teléfono ya está en uso.' })
      }
    }

    // 6. Error de validación (Joi)
    if (error.isJoi) {
      return res.status(400).json({ message: error.message })
    }

    // 7. Error inesperado
    return res.status(500).json({
      message: 'Error al registrar el usuario.',
      error: error.message
    })
  }
}

module.exports = { registerController }
