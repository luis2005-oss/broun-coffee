const contactMessageRepository = require('../repositories/contactMessage.repository');

class ContactMessageService {
  async findAll() {
    return await contactMessageRepository.findAll();
  }

  async findOne(id) {
    const message = await contactMessageRepository.findByPk(id);
    if (!message) {
      throw new Error('Contact message not found');
    }
    return message;
  }

  async create(messageData) {
    return await contactMessageRepository.create(messageData);
  }

  async delete(id) {
    await this.findOne(id); // Ensure it exists
    return await contactMessageRepository.destroy(id);
  }
}

module.exports = new ContactMessageService();