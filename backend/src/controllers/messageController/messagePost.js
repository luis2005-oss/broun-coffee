const { messageValidator } = require('../../models/validations/credentialMessage')
const { message } = require('../../repositories/contactMessage.repository')

const messageController = async (req, res) => {
  const {
    name,
    email,
    phone,
    message: userMessage 
  } = req.body
  
  try {
    // Validar con joi
    await messageValidator.validateAsync({
      name,
      email,
      phone,
      message: userMessage
    })

    // Enviar mensaje 
    const newMessages = await message(
      name,
      email,
      phone,
      userMessage
    )

    res.status(201).json({
      message: 'Se envió tu mensaje con éxito',
      data: newMessages
    })
  } catch (error) {
    // Manejo de errores de validación de Joi
    if (error.isJoi || error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.details.map(detail => detail.message)
      })
    }

    // Otros errores (base de datos, etc.)
    console.error('Error al crear mensaje:', error)
    return res.status(500).json({
      message: 'Error al procesar el mensaje',
      error: error.message
    })
  }
}

module.exports = { messageController }