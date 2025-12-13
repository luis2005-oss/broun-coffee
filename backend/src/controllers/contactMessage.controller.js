const contactMessageService = require('../services/contactMessage.service');

const getAll = async (req, res) => {
  try {
    const messages = await contactMessageService.findAll();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const newMessage = await contactMessageService.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await contactMessageService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  create,
  deleteOne,
};