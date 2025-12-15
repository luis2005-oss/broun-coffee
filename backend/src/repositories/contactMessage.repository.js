const { ContactMessage } = require('../models');


const message = async (
  name, 
  email,
  phone,
  message
) =>{
  const newMessage = await ContactMessage.create({
    name, 
    email,
    phone,
    message,
    state: 'active'
  })
  return newMessage
}

//verificar si esta activo o no el mensaje
  const messageActive = async (messageId) =>{
  const message = await ContactMessage.findOne({
    where: {idMessage : messageId},
    attributes: ['state']
  })

  return !!message?.isActive
}
class ContactMessageRepository {

  async findAll() {
    return await ContactMessage.findAll({ order: [['createdAt', 'DESC']] });
  }

  async findByPk(id) {
    return await ContactMessage.findByPk(id);
  }


  async destroy(id) {
    return await ContactMessage.destroy({ where: { id } });
  }
}

module.exports = {message, messageActive, ContactMessageRepository};