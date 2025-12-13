const { Orders, OrderDetails, Products } = require('../models');

class OrderRepository {
  async findAll() {
    return await Orders.findAll({
      include: [
        {
          model: OrderDetails,
          as: 'details',
          include: [{ model: Products, as: 'product' }],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
  }

  async findByPk(id) {
    return await Orders.findByPk(id, {
      include: [
        {
          model: OrderDetails,
          as: 'details',
          include: [{ model: Products, as: 'product' }],
        },
      ],
    });
  }

  /**
   * Creates an order and its details within a given transaction.
   * The service layer is responsible for creating and managing the transaction.
   * @param {object} orderData The data for the order.
   * @param {Array<object>} detailsData The data for the order details.
   * @param {import('sequelize').Transaction} transaction The Sequelize transaction.
   */
  async create(orderData, detailsData, transaction) {
    const order = await Orders.create(orderData, { transaction });

    const detailsWithOrderId = detailsData.map((detail) => ({
      ...detail,
      orderId: order.id,
    }));

    await OrderDetails.bulkCreate(detailsWithOrderId, { transaction });

    return order;
  }

  async update(id, orderData) {
    const [updatedRows] = await Orders.update(orderData, {
      where: { id },
    });
    return updatedRows > 0;
  }
}

module.exports = new OrderRepository();