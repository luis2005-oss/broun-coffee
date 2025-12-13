const { Promotion } = require('../models');

class PromotionRepository {
  async findAll() {
    return await Promotion.findAll();
  }

  async findByPk(id) {
    return await Promotion.findByPk(id);
  }

  async create(promotionData) {
    return await Promotion.create(promotionData);
  }

  async update(id, promotionData) {
    const [updatedRows] = await Promotion.update(promotionData, {
      where: { id },
    });
    return updatedRows > 0;
  }

  async destroy(id) {
    return await Promotion.destroy({ where: { id } });
  }
}

module.exports = new PromotionRepository();