const express = require('express');
const router = express.Router();
const contactMessageController = require('../controllers/contactMessage.controller');
const validateMiddleware = require('../middlewares/validate.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const {
  createContactMessageSchema,
  getContactMessageSchema,
} = require('../utils/schemas/contactMessage.schema');

// Public route to send a message
router.post(
  '/',
  validateMiddleware({ body: createContactMessageSchema }),
  contactMessageController.create
);

// Protected routes for admin
router.get('/', authMiddleware, contactMessageController.getAll);
router.delete(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getContactMessageSchema }),
  contactMessageController.deleteOne
);

module.exports = router;