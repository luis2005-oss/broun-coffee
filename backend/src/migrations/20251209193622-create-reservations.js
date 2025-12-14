'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservations', {
      idReservations: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      clientName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      phone: {
        type: Sequelize.DATE,
        allowNull: false
      },
      numberPeople: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reservationDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      reservationTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      reason: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      specialRequeriment: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      message: {
        type: Sequelize.INTEGER(200),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservations')
  }
}
