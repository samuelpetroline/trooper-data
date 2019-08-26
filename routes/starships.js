const routes = require('express').Router();

routes.get('/', async (req, res) => {
    try{
        let value = await global.cache.getOrSet('starships', async (value) => {
            let response = await global.axios.get('starships');

            return response.data.results;
        });

        return res.status(200).json(value);
    }
    catch (error) {
        res.status(500).send(error);
    }

});

routes.get('/:id', async (req, res) => {
    try{
        let value = await global.cache.getOrSet(`starships_${req.params.id}`, async (value) => {
            let response = await global.axios.get(`starships/${req.params.id}`);

            return response.data;
        });

        return res.status(200).json(value);
    }
    catch (error) {
        res.status(500).send(error);
    }

});

module.exports = routes;