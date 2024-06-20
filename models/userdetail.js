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
    get greet(){
      if(this.educationLevel === "Beginner"){
          return this.fullName = `${this.fullName} - Beginner`
      }else if(this.educationLevel === "Intermediate"){
           return this.fullName = `${this.fullName} - Intermediate`
      }else{
          return this.fullName = `${this.fullName} - Advanced`
      }
  }
  }
  UserDetail.init({
    fullName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    educationLevel: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};