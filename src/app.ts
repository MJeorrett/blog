import * as express from 'express';

import * as homeController from './controllers/home';

const app = express();

app.set('port', 3000);

app.get("/", homeController.index);

module.exports = app;