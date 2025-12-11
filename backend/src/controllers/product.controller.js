const productService = require('../services/product.service');

const getProducts = async (req, res) => {
  try {
    const { search } = req.query;
    const products = await productService.getAllProducts(search);
    
    return res.status(200).json({
      message: search ? `Resultados para: ${search}` : 'Lista de productos',
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    return res.status(200).json({ message: 'Producto encontrado', data: product });
  } catch (error) {
    if (error.message === 'PRODUCT_NOT_FOUND') {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    // req.body ya viene validado por el middleware
    const newProduct = await productService.createProduct(req.body);
    return res.status(201).json({ message: 'Producto creado exitosamente', data: newProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear producto', error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await productService.updateProduct(id, req.body);
    return res.status(200).json({ message: 'Producto actualizado', data: updatedProduct });
  } catch (error) {
    if (error.message === 'PRODUCT_NOT_FOUND') {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.deleteProduct(id);
    return res.status(200).json({ message: 'Producto desactivado correctamente', data: result });
  } catch (error) {
    if (error.message === 'PRODUCT_NOT_FOUND') {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};