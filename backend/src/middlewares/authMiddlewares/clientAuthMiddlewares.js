const { verifyJWT } = require('../../utils/jwtUtils')
const { clientIsActive } = require('../../repositories/clientRepository')
const { getAuthToken } = require('../../utils/cookieUtils')

const clientAuthMiddleware = async (req, res, next) => {
  try {
    const accessToken = getAuthToken(req.cookies)

    if (!accessToken) {
      throw new Error('')
    }

    const { idUser, email, exp } = verifyJWT(accessToken)
    console.log(idUser, email, exp)

    if (!email || !idUser) {
      throw new Error('')
    }
    const isActive = await clientIsActive(idUser, email)
    if (!isActive) {
      throw new Error('')
    }

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Sin autorización' })
  }
}

module.exports = { clientAuthMiddleware }
