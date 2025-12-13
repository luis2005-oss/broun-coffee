const orderRepository = require('../repositories/order.repository');
const { sequelize } = require('../models'); // To manage transactions

class OrderService {
  async findAll() {
    return await orderRepository.findAll();
  }

  async findOne(id) {
    const order = await orderRepository.findByPk(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  }

  async create(userId, orderPayload) {
    const { details, ...orderData } = orderPayload;
    orderData.userId = userId; // Add userId to the order data

    const transaction = await sequelize.transaction();
    try {
      const newOrder = await orderRepository.create(
        orderData,
        details,
        transaction
      );

      await transaction.commit();

      // Return the full order with details by fetching it again
      return await this.findOne(newOrder.id);
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Order creation failed: ${error.message}`);
    }
  }

  async updateStatus(id, status) {
    await this.findOne(id); // Ensure order exists
    await orderRepository.update(id, { status });
    return await this.findOne(id);
  }
}

module.exports = new OrderService();