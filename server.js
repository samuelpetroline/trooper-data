const express = require('express');
const axios = require('axios');

const config = require('./config.json');
const routes = require('./routes/routes');

const app = express();
const port = config.port || 5000;

const axiosInstance = axios.create({
    baseURL: config.baseURL
});

global.axios = axiosInstance;

app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));