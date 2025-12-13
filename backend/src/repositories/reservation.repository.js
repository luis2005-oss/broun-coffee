const { Reservations } = require('../models');

class ReservationRepository {
  async findAll() {
    return await Reservations.findAll({ order: [['reservationDate', 'ASC']] });
  }

  async findByPk(id) {
    return await Reservations.findByPk(id);
  }

  async create(reservationData) {
    return await Reservations.create(reservationData);
  }

  async update(id, reservationData) {
    const [updatedRows] = await Reservations.update(reservationData, {
      where: { id },
    });
    return updatedRows > 0;
  }

  async destroy(id) {
    return await Reservations.destroy({ where: { id } });
  }
}

module.exports = new ReservationRepository();