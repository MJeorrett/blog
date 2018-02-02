import * as express from 'express';

import * as homeController from './controllers/home';
import * as todoController from './controllers/todo';
import * as articleControllers from './controllers/articles';

const app = express();
const port = process.env.PORT || 5000;

app.set('port', port);

app.get("/", homeController.index);
app.get("/todo", todoController.index);
app.get("/articles/1", articleControllers.article1);

module.exports = app;