const promotionRepository = require('../repositories/promotion.repository');

class PromotionService {
  async findAll() {
    return await promotionRepository.findAll();
  }

  async findOne(id) {
    const promotion = await promotionRepository.findByPk(id);
    if (!promotion) {
      throw new Error('Promotion not found');
    }
    return promotion;
  }

  async create(promotionData) {
    return await promotionRepository.create(promotionData);
  }

  async update(id, promotionData) {
    await this.findOne(id); // Ensure it exists
    await promotionRepository.update(id, promotionData);
    return await this.findOne(id);
  }

  async delete(id) {
    await this.findOne(id); // Ensure it exists
    return await promotionRepository.destroy(id);
  }
}

module.exports = new PromotionService();