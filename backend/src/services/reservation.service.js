const reservationRepository = require('../repositories/reservation.repository');

class ReservationService {
  async findAll() {
    return await reservationRepository.findAll();
  }

  async findOne(id) {
    const reservation = await reservationRepository.findByPk(id);
    if (!reservation) {
      throw new Error('Reservation not found');
    }
    return reservation;
  }

  async create(reservationData) {
    return await reservationRepository.create(reservationData);
  }

  async updateStatus(id, status) {
    await this.findOne(id); // Ensure it exists
    await reservationRepository.update(id, { status });
    return await this.findOne(id);
  }

  async delete(id) {
    await this.findOne(id);
    return await reservationRepository.destroy(id);
  }
}

module.exports = new ReservationService();