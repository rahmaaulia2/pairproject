'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserDetail.belongsTo(models.User)
    }
  }
  UserDetail.init({
    fullName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : {
          args : [5, 10],
          msg : 'Input name must be fullName'
        }
      }}
    ,
      age: {
        type : DataTypes.INTEGER,
        allowNull :false,
        validate : {
          min : {args : 12, msg:'Minimum age 12 years old'}
        }
      },
      educationLevel: DataTypes.STRING,
      email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail :{
          msg : ('Invalid input email')
        }
      }
    },
    phoneNumber: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};