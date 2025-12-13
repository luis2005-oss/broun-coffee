const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const validateMiddleware = require('../middlewares/validate.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
} = require('../utils/schemas/order.schema');

// All order routes are protected
router.use(authMiddleware);

// GET / - Get all orders (admin) or user's own orders
router.get('/', orderController.getAll);

// POST / - Create a new order
router.post(
  '/',
  validateMiddleware({ body: createOrderSchema }),
  orderController.create
);

// GET /:id - Get a specific order
router.get(
  '/:id',
  validateMiddleware({ params: getOrderSchema }),
  orderController.getById
);

// PATCH /:id - Update order status (typically by an admin)
router.patch(
  '/:id',
  validateMiddleware({ params: getOrderSchema, body: updateOrderSchema }),
  orderController.updateStatus
);

module.exports = router;