const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const routes = require('./routes');

const hostname = 'localhost';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

    const uri = url.parse(req.url).path;
    res.setHeader('Content-Type', 'text/html');

    const routeIsValid = routes.hasOwnProperty(uri);

    if (!routeIsValid) {
        res.statusCode = 404;
        const errorFile = path.join(process.cwd(), "public", "404.html");
        fs.readFile(errorFile, (err, file) => {
            res.write(file);
            res.end();
        });
        return;
    }

    const filePath = path.join(process.cwd(), "public", routes[uri]);

    fs.readFile(filePath, (err, file) => {

        if (err) {
            res.statusCode = 500;
            res.end(err + "\n");
            return;
        }

        res.statusCode = 200;
        res.write(file);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});