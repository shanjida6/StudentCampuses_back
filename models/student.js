//models are attached to a db object. 

'use strict'

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('student', {
      //sequalize handles id, updated_at and deleted_at 
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    student_first_name: {
      type: DataTypes.STRING,
      required: true
    },
    student_last_name: {
        type: DataTypes.STRING,
        required: true
    },
    //campus id is our foreign key 
    campus_id: {
      type: DataTypes.UUID,
      allowNull: false
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
        type: DataTypes.DECIMAL,
        required: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Student;
};