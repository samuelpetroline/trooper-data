const routes = require('express').Router();
const axios = require('axios');

routes.get('/', async (req, res) => {
    try{
        let response = await global.axios.get('films');

        res.status(200).json(response.data.results);
    }
    catch (error) {
        res.status(500).send(error);
    }

});

module.exports = routes;