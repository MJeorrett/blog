import * as express from 'express';

import * as homeController from './controllers/home';

const app = express();
const port = process.env.PORT || 5000;

app.set('port', port);

app.get("/", homeController.index);

module.exports = app;