const app = require('./app');

const server = app.listen(app.get('port'), () => {
    console.info(`Blog is running at http://localhost:${app.get('port')}.`);
});