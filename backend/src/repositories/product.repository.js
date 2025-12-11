const { Products, Sequelize } = require('../models');
const { Op } = Sequelize;

class ProductRepository {
  
  async findAll(search) {
    let whereCondition = {};
    if (search) {
      whereCondition = { name: { [Op.like]: `%${search}%` } };
    }
    return await Products.findAll({ where: whereCondition });
  }

  async findById(id) {
    return await Products.findByPk(id);
  }

  async create(productData) {
    return await Products.create(productData);
  }

  async update(product, updates) {
    return await product.update(updates);
  }

  async softDelete(product) {
    return await product.update({ state: 'Inactivo' });
  }
  
  // Métodos comentados para uso futuro
  /*
  async findByCategory(categoryId) {
    return await Products.findAll({ where: { categoryId } });
  }
  */
}

module.exports = new ProductRepository();