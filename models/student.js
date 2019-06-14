//models are attached to a db object. 

'use strict'

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('student', {
      //sequalize handles id, updated_at and deleted_at 
    firstName: {
      type: DataTypes.STRING,
      required: true
    },
    lastName: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    imageUrl: {
        type: DataTypes.STRING,
        required: true
    },
    gpa: {
        type: DataTypes.DOUBLE,
        required: true
    }})
  return Student;
};