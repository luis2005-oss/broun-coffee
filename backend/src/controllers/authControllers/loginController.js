const { CredentialsValidator } = require('../../models/validations/credentialsValidatior')
const { getUserByEmail } = require('../../repositories/clientRepository')
const { verifyPassword } = require('../../utils/bcryptUtils')
const { cookieName, cookieOptions } = require('../../utils/cookieUtils')
const { createJWT } = require('../../utils/jwtUtils')

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    await CredentialsValidator.validateAsync({ email, password })

    const user = await getUserByEmail(email)
    console.log('Usuario encontrado:', user)
    
    if (!user) {
      return res.status(401).json({ message: 'Usuario y/o contraseña incorrectos' })
    }

    // Verificar si el usuario está activo usando 'state'
    if (user.state !== 'active') {
      return res.status(403).json({ message: 'Usuario inactivo' })
    }

    const passwordIsValid = await verifyPassword(password, user.password)
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Usuario y/o contraseña incorrectos' })
    }

    const jwtPayload = {
      idUser: user.idUser,
      email: user.email,
      role: user.role
    }
    const token = createJWT(jwtPayload)

    res.cookie(cookieName, token, cookieOptions)
    
    return res.status(200).json({ 
      message: 'inicio de sesión exitoso', 
      userId: user.idUser,
      role: user.role
    })
  } catch (error) {
    console.error('Error en login:', error)
    return res.status(400).json({ message: error.message })
  }
}

module.exports = { loginController }