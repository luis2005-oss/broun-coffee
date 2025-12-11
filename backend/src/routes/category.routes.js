const { Router } = require('express');
const controller = require('../controllers/category.controller');
const validate = require('../middlewares/validate.middleware');
const schema = require('../utils/schemas/category.schema');

const router = Router();

// GET /categories (Buscar)
router.get('/', validate(schema.searchSchema, 'query'), controller.getCategories);

// GET /categories/:id
router.get('/:id', validate(schema.idSchema, 'params'), controller.getCategoryById);

// POST /categories
router.post('/', validate(schema.createCategorySchema, 'body'), controller.createCategory);

// PUT /categories/:id
router.put('/:id', 
  [validate(schema.idSchema, 'params'), validate(schema.updateCategorySchema, 'body')], 
  controller.updateCategory
);

// DELETE /categories/:id
router.delete('/:id', validate(schema.idSchema, 'params'), controller.deleteCategory);

module.exports = router;