const dotenv = require('dotenv')
const express = require('express')
const cookieParser = require('cookie-parser')
const { authRouter } = require('../src/routes/authRuter')

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())

// ROUTES
server.use('/', authRouter)

server.listen(port, () => {
  console.log(`server in: http://localhost:${port}`)
})
