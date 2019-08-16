const routes = require('express').Router();

// module.exports = {
//     query: (req, res) => {
//         res.json(req.params.query)
//     }
// };

routes.post('/:query', (req, res) => {
    res.json(req.params.query)
});

module.exports = routes;