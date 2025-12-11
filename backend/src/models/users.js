'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Users.init({
    idUser: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
    birthdate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'active'
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    role: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Users'
  })
  return Users
}
