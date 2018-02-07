const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const routes = require('./routes');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

    const uri = url.parse(req.url).path;

    res.setHeader('Content-Type', 'text/html');

    const routeIsValid = routes.hasOwnProperty(uri);
    const resultUri = routeIsValid ? uri : "/404";

    sendFile(resultUri, res);
});

function sendFile(uri, res) {
    const filePath = path.join(process.cwd(), "public", routes[uri]);

    fs.readFile(filePath, (err, file) => {

        if (err) {
            res.statusCode = 500;
            res.write(err + "\n");
            res.end();
            return;
        }

        res.statusCode = 200;
        res.write(file);
        res.end();
    });
}

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});