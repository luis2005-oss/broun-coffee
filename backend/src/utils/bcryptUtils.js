const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 12)
    return hashedPassword
  } catch (error) {
    throw new Error('Error al hashear la contraseña')
  }
}

const verifyPassword = async (password, hashPassword) => {
  try {
    const passwordIsValid = await bcrypt.compare(password, hashPassword)
    return passwordIsValid
  } catch (error) {
    throw new Error('Error al comparar contraseñas')
  }
}

module.exports = { hashPassword, verifyPassword }
