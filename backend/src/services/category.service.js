const categoryRepository = require('../repositories/category.repository');

class CategoryService {

  async getAllCategories(search) {
    return await categoryRepository.findAll(search);
  }

  async getCategoryById(id) {
    const category = await categoryRepository.findById(id);
    if (!category) {
      throw new Error('CATEGORY_NOT_FOUND');
    }
    return category;
  }

  async createCategory(data) {
    return await categoryRepository.create(data);
  }

  async updateCategory(id, updates) {
    const category = await categoryRepository.findById(id);
    if (!category) {
      throw new Error('CATEGORY_NOT_FOUND');
    }
    return await categoryRepository.update(category, updates);
  }

  async deleteCategory(id) {
    const category = await categoryRepository.findById(id);
    if (!category) {
      throw new Error('CATEGORY_NOT_FOUND');
    }
    return await categoryRepository.softDelete(category);
  }
}

module.exports = new CategoryService();