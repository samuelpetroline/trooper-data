const cache = require('./utils/Cache');

const express = require('express');
const axios = require('axios');
var cors = require('cors');

const config = require('./config.json');
const routes = require('./routes/routes');

const app = express();
const port = config.port || 5000;

const axiosInstance = axios.create({
    baseURL: config.baseURL
});

global.axios = axiosInstance;
global.cache = new cache(config.cacheExpireTimeInSeconds);;

app.use(cors({origin: '*'}));
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));