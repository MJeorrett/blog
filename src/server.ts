import * as express from 'express';
import { Request, Response } from 'express';

const app = require('./app');

app.use(express.static('public'));

const server = app.listen(app.get('port'), () => {
    console.info(`Blog is running at http://localhost:${app.get('port')}.`);
});