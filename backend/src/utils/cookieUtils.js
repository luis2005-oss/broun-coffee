const getAuthToken = (cookies) => {
  const accessToken = cookies[cookieName]
  return accessToken
}

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 2 * 60 * 60 * 1000
}

const cookieName = 'accessToken'

module.exports = { getAuthToken, cookieOptions, cookieName }
