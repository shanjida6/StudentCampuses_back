'use strict'

const routes = [
  require('./campus-router'),
  require('./student-router')
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};