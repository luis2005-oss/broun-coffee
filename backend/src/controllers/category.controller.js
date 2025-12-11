const categoryService = require('../services/category.service');

const getCategories = async (req, res) => {
  try {
    const { search } = req.query;
    const categories = await categoryService.getAllCategories(search);
    
    return res.status(200).json({
      message: search ? `Resultados para: ${search}` : 'Lista de categorías',
      count: categories.length,
      data: categories
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(id);
    return res.status(200).json({ message: 'Categoría encontrada', data: category });
  } catch (error) {
    if (error.message === 'CATEGORY_NOT_FOUND') {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    return res.status(201).json({ message: 'Categoría creada exitosamente', data: newCategory });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear categoría', error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await categoryService.updateCategory(id, req.body);
    return res.status(200).json({ message: 'Categoría actualizada', data: updatedCategory });
  } catch (error) {
    if (error.message === 'CATEGORY_NOT_FOUND') {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await categoryService.deleteCategory(id);
    return res.status(200).json({ message: 'Categoría desactivada correctamente', data: result });
  } catch (error) {
    if (error.message === 'CATEGORY_NOT_FOUND') {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};