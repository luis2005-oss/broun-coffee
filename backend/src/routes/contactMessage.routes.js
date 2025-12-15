const express = require('express');
const router = express.Router();
const contactMessageController = require('../controllers/messageController/contactMessage.controller');
const validateMiddleware = require('../middlewares/validate.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const {messageController} = require('../controllers/messageController/messagePost')
const {
  getContactMessageSchema,
} = require('../utils/schemas/contactMessage.schema');

// Public route to send a message
router.post('/', messageController)

// Protected routes for admin
router.get('/', authMiddleware, contactMessageController.getAll);
router.delete(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getContactMessageSchema }),
  contactMessageController.deleteOne
);

module.exports = router;