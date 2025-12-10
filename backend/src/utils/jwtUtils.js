const jwt = require('jsonwebtoken')

const createJWT = (payload) => {
  const jwtSecret = process.env.JWT_SECRET_KEY || 'miContrasenia'
  const jwtOptions = {
    expiresIn: 60
  }
  const token = jwt.sign(payload, jwtSecret, jwtOptions)
  return token
}

const verifyJWT = (token) => {
  const jwtSecret = process.env.JWT_SECRET_KEY || 'miContrasenia'
  const jwtOptions = {
    expiresIn: '2h'
  }
  const tokenValues = jwt.verify(token, jwtSecret, jwtOptions)

  return tokenValues
}

module.exports = { createJWT, verifyJWT }
