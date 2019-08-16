const routes = require('express').Router();

const films = require('./films');
const people = require('./people');
const planet = require('./planet');
const search = require('./search');
const species = require('./species');
const starships = require('./starships');
const vehicles = require('./vehicles');

routes.use('/search', search);
routes.use('/films', films);
routes.use('/people', people);
routes.use('/planet', planet);
routes.use('/species', species);
routes.use('/starships', starships);
routes.use('/vehicles', vehicles);

module.exports = routes;