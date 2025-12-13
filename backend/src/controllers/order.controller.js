const orderService = require('../services/order.service');

const getAll = async (req, res) => {
  try {
    const orders = await orderService.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderService.findOne(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const userId = req.user.id; // From authMiddleware
    const newOrder = await orderService.create(userId, req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedOrder = await orderService.updateStatus(id, status);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateStatus,
};