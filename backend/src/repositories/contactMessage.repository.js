const { ContactMessage } = require('../models');

class ContactMessageRepository {
  async findAll() {
    return await ContactMessage.findAll({ order: [['createdAt', 'DESC']] });
  }

  async findByPk(id) {
    return await ContactMessage.findByPk(id);
  }

  async create(messageData) {
    return await ContactMessage.create(messageData);
  }

  async destroy(id) {
    return await ContactMessage.destroy({ where: { id } });
  }
}

module.exports = new ContactMessageRepository();