const { Products, Sequelize } = require('../models');
const { Op } = Sequelize;

class ProductRepository {
  
  async findAll(search) {
    // 1. Definimos el filtro base: SOLO productos activos
    let whereCondition = { state: 'Activo' };

    // 2. Si hay búsqueda, agregamos el filtro de nombre al objeto existente
    if (search) {
      whereCondition.name = { [Op.like]: `%${search}%` };
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
}

module.exports = new ProductRepository();