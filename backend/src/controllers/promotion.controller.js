const promotionService = require('../services/promotion.service');

const getAll = async (req, res) => {
  try {
    const promotions = await promotionService.findAll();
    res.status(200).json(promotions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const promotion = await promotionService.findOne(id);
    res.status(200).json(promotion);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const newPromotion = await promotionService.create(req.body);
    res.status(201).json(newPromotion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPromotion = await promotionService.update(id, req.body);
    res.status(200).json(updatedPromotion);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await promotionService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteOne,
};