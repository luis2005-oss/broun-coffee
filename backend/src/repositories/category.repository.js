const { Category, Sequelize } = require('../models');
const { Op } = Sequelize;

class CategoryRepository {
  
  async findAll(search) {
    // 1. Filtro base: Solo Categorías Activas
    let whereCondition = { state: 'Activo' };

    // 2. Si hay búsqueda, agregamos el nombre
    if (search) {
      whereCondition.name = { [Op.like]: `%${search}%` };
    }

    return await Category.findAll({ where: whereCondition });
  }

  async findById(id) {
    return await Category.findByPk(id);
  }

  async create(categoryData) {
    return await Category.create(categoryData);
  }

  async update(category, updates) {
    return await category.update(updates);
  }

  async softDelete(category) {
    return await category.update({ state: 'Inactivo' });
  }
}

module.exports = new CategoryRepository();