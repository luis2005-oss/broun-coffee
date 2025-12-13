const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');
const validateMiddleware = require('../middlewares/validate.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const {
  createReservationSchema,
  updateReservationSchema,
  getReservationSchema,
} = require('../utils/schemas/reservation.schema');

// Public route to create a reservation
router.post(
  '/',
  validateMiddleware({ body: createReservationSchema }),
  reservationController.create
);

// Protected routes for admin
router.get('/', authMiddleware, reservationController.getAll);

router.get(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getReservationSchema }),
  reservationController.getById
);

router.patch(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getReservationSchema, body: updateReservationSchema }),
  reservationController.updateStatus
);

router.delete(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getReservationSchema }),
  reservationController.deleteOne
);

module.exports = router;