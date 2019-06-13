'use strict'

const Sequelize = require('sequelize');
//const env = require('./env');

/* sequelize object goes here */ 

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
//const db = {};

// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${Campus-Manager}`, { logging: false });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.campus = require('../models/campus.js')(sequelize, Sequelize);
db.students = require('../models/student.js')(sequelize, Sequelize);

//belongsTo declares how the tables are connected 
//belongsTo lets student belong to one campus_id 
//table (student) belongs to the column (campus).
db.student.belongsTo(db.campus);

//one to many relationship
//campus belongs to many students 
db.campus.hasMany(db.student);

module.exports = db;