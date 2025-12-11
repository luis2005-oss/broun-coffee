const { CredentialsValidator } = require('../../models/validations/credentialsValidatior')
const { getCredentialsByEmail } = require('../../repositories/clientRepository')
const { verifyPassword } = require('../../utils/bcryptUtils')
const { cookieName, cookieOptions } = require('../../utils/cookieUtils')
const { createJWT } = require('../../utils/jwtUtils')

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    await CredentialsValidator.validateAsync({ email, password })

    // valisae que el correo exista
    const user = await getCredentialsByEmail(email)
    console.log(user)
    if (!user) {
      throw new Error('')
    }

    // validar que la contraseña exista
    const passwordIsValid = await verifyPassword(password, user.password)
    if (!passwordIsValid) {
      throw new Error('')
    }

    const jwtPayload = {
      idUser: user.idUser,
      email: user.email
    }
    const token = createJWT(jwtPayload)

    res.cookie(cookieName, token, cookieOptions)
    return res.status(200).json({ message: 'inicio de sesión exitoso', userId: user.idUser })
  } catch (error) {
    return res.status(500).json({ message: 'Usuario y/o contraseña incorrectos', error: 'Auth error' })
  }
}

module.exports = { loginController }
