const productRepository = require('../repositories/product.repository');

class ProductService {

  async getAllProducts(search) {
    // Aquí podrías agregar lógica extra (ej. formatear precios)
    return await productRepository.findAll(search);
  }

  async getProductById(id) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error('PRODUCT_NOT_FOUND'); // Lanzamos error simple para que el controller lo maneje
    }
    return product;
  }

  async createProduct(data) {
    // Aquí podrías validar reglas de negocio complejas (ej. no duplicar nombres exactos)
    return await productRepository.create(data);
  }

  async updateProduct(id, updates) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error('PRODUCT_NOT_FOUND');
    }
    return await productRepository.update(product, updates);
  }

  async deleteProduct(id) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error('PRODUCT_NOT_FOUND');
    }
    return await productRepository.softDelete(product);
  }
}

module.exports = new ProductService();