const { getClientBasicInfo } = require('../../repositories/clientRepository')
const { getAuthToken } = require('../../utils/cookieUtils')
const { verifyJWT } = require('../../utils/jwtUtils')

const aboutMeController = async (req, res) => {
  try {
    const authToken = getAuthToken(req.cookies)
    if (!authToken) {
      throw new Error('')
    }
    const { idUser } = verifyJWT(authToken)

    const userBasicInfo = await getClientBasicInfo(idUser)
    return req.json({ ...userBasicInfo.dataValues })
  } catch (error) {
    return res.status(401).json({ message: 'No autorizado' })
  }
}

module.exports = { aboutMeController }
