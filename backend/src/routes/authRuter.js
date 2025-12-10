const { Router } = require('express')
const { registerController } = require('../controllers/authControllers/regiterController')
const { clientAuthMiddleware } = require('../middlewares/authMiddlewares/clientAuthMiddlewares')
const { loginController } = require('../controllers/authControllers/loginController')
const { aboutMeController } = require('../controllers/authControllers/aboutMEController')

const authRouter = Router()

authRouter.post('/register', registerController)
authRouter.post('/login', loginController)
authRouter.post('/about-me', clientAuthMiddleware, aboutMeController)

module.exports = { authRouter }
