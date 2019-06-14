'use strict';

/*models define database tables*/ 

//The index.js file pulls in the files from the routes folder, and 
//injects the app object and db object into each route.


module.exports = (sequelize, DataTypes) => {
  const Campus = sequelize.define('campus', {
    //Sequelize will take care of managing the id, 
    //created_at, updated_at, and deleted_at columns.
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    imageUrl: {
        type: DataTypes.STRING,
        required: true
      },
    address: {
        type: DataTypes.STRING,
        required: true
      },  
    description: {
        type: DataTypes.TEXT,
        required: true
      },      
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    // 'paranoid:true' means a deleted record (table row) will not be returned in future queries.
    // 'false' will return all deleted records that match the query w/ deletion timestamp 
    paranoid: true,
    underscored: true
  });
  return Campus;
};