//Create Department model
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create Department model
class Department extends Model {}

//Define table columns and configuration
Department.init(
  {
    dept_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    dept_name:{
      type: DataTypes.STRING(30),
      allowNull: false,
    }
  }, 
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'departments',
  }
);
module.exports = Department;