const { Users } = require('../models')
/* =========================
  REGISTRO DE CLIENTE
========================= */
const clientRegister = async (firstName, lastName, email, phone, birthdate, gender, address, password) => {
  const newClient = await Users.create({
    firstName,
    lastName,
    email,
    phone,
    birthdate,
    gender,
    address,
    state: 'active',
    password,
    role: 'C',
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return newClient
}
/* =========================
  CREDENCIALES (LOGIN)
========================= */
  const getUserByEmail = async (email) => {
  return await Users.findOne({
    where: { email },
    attributes: ['idUser', 'email', 'password', 'role', 'state']
  })
}

/* =========================
  VERIFICAR SI ESTÁ ACTIVO
========================= */
const userIsActive = async (userId) => {
  const user = await Users.findOne({
    where: { idUser: userId },
    attributes: ['state']
  })

  return !!user?.isActive
}

/* =========================
  INFO BÁSICA DEL CLIENTE
========================= */
const getClientBasicInfo = async (userId) => {
  const clientBasicInfo = await Users.findOne({
    where: { idUser: userId},
    attributes: ['idUser', 'firstname', 'lastname', 'email', 'birthdate']
  })
  return clientBasicInfo
}

module.exports = { clientRegister, getUserByEmail, userIsActive, getClientBasicInfo }
