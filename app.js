'use strict'

//our database 
const db = require('./config/db')
const api = module.exports = require('express').Router()
const Sequelize = require('sequelize');

//mounting our apiRouter 
api
.use('/students', require('./routes/student-router'))
.use('/campuses', require('./routes/campus-router'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

app.listen(3002, () => {
    console.log("Hello world!!!");
  })
