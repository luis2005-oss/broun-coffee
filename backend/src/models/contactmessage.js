'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ContactMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  ContactMessage.init({
    idContactMessages: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone: {
      type: DataTypes.DATE,
      allowNull: false
    },
    affair: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    shippingDate: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ContactMessage'
  })
  return ContactMessage
}
