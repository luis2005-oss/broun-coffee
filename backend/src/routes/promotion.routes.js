const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotion.controller');
const validateMiddleware = require('../middlewares/validate.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const {
  createPromotionSchema,
  updatePromotionSchema,
  getPromotionSchema,
} = require('../utils/schemas/promotion.schema');

// Public routes
router.get('/', promotionController.getAll);
router.get(
  '/:id',
  validateMiddleware({ params: getPromotionSchema }),
  promotionController.getById
);

// Protected routes (Admin only)
router.post(
  '/',
  authMiddleware,
  validateMiddleware({ body: createPromotionSchema }),
  promotionController.create
);

router.put(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getPromotionSchema, body: updatePromotionSchema }),
  promotionController.update
);

router.delete(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getPromotionSchema }),
  promotionController.deleteOne
);

module.exports = router;