const { Users } = require('../models')

const clientRegister = async (firstName, lastName, email, phone, birthdate, gender, address, password, repassword) => {
  const newClient = await Users.create({
    firstName,
    lastName,
    email,
    phone,
    birthdate,
    gender,
    address,
    password,
    repassword,
    role: 'C',
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return newClient
}

const getCredentialsByEmail = async (email) => {
  const client = await Users.findOne(
    {
      where: { email, role: 'C' },
      attributes: ['idUser', 'email', 'password']
    }
  )

  return client
}

const clientIsActive = async (userId, email) => {
  const isActive = await Users.findOne(
    {
      where: { idUser: userId, email, role: 'C' },
      attributes: ['isActive']
    })
  if (!isActive || !isActive.isActive) {
    return false
  }

  return true
}

const getClientBasicInfo = async (userId) => {
  const clientBasicInfo = await Users.findOne({
    where: { idUser: userId, role: 'C' },
    attributes: ['idUser', 'firstname', 'lastname', 'email', 'birthdate']
  })
  return clientBasicInfo
}

module.exports = { clientRegister, getCredentialsByEmail, clientIsActive, getClientBasicInfo }
