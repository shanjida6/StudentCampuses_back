'use strict'

//our database 
const db = require('./config/db')
const api = module.exports = require('express').Router()
const Sequelize = require('sequelize');
const router = require('./routes/index');
//extracts body portion of an incoming stream and imposes itself in req.body 
const bodyParser = require('body-parser'); 
//its a middleware 
const morgan = require('morgan'); 

const express = require('express'); 
const app = express(); 

//mounting our apiRouter 
api
.use('/students', require('./routes/student-router'))
.use('/campuses', require('./routes/campus-router'))


app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end())


router(app, db);

const PORT = 3002; 


  //drop and resync with { force: true }
  //drops tables and recreates 
db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});

