const reservationService = require('../services/reservation.service');

const getAll = async (req, res) => {
  try {
    const reservations = await reservationService.findAll();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await reservationService.findOne(id);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const newReservation = await reservationService.create(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedReservation = await reservationService.updateStatus(id, status);
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await reservationService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateStatus,
  deleteOne,
};