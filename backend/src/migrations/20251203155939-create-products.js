'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      idProduct: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      // --- NUEVO CAMPO OBLIGATORIO ---
      categoryId: {
        type: Sequelize.UUID,
        allowNull: false, // Un producto debe tener categoría sí o sí
        references: {
          model: 'Categories', // Nombre exacto de la tabla de categorías en BD
          key: 'idCategory'    // Nombre exacto de la llave primaria en Categorías
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      // -------------------------------
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      img: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      state: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      creationDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products')
  }
}