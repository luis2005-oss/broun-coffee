const { Router } = require('express');
const controller = require('../controllers/product.controller');
const validate = require('../middlewares/validate.middleware');
const schema = require('../utils/schemas/product.schema');

const router = Router();

// GET /products (Con validación de query params para búsqueda)
router.get('/', validate(schema.searchSchema, 'query'), controller.getProducts);

// GET /products/:id
router.get('/:id', validate(schema.idSchema, 'params'), controller.getProductById);

// POST /products
router.post('/', validate(schema.createProductSchema, 'body'), controller.createProduct);

// PUT /products/:id
router.put('/:id', 
  [validate(schema.idSchema, 'params'), validate(schema.updateProductSchema, 'body')], 
  controller.updateProduct
);

// DELETE /products/:id
router.delete('/:id', validate(schema.idSchema, 'params'), controller.deleteProduct);

module.exports = router;