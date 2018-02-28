const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const firebase = require('firebase');
const credentials = require('./credentials')

const routes = require('./routes');

var firebaseConfig = {
    apiKey: credentials.firebase.apiKey,
    authDomain: "nine-bits-in-a-byte.firebaseapp.com",
    databaseURL: "https://nine-bits-in-a-byte.firebaseio.com",
    projectId: "nine-bits-in-a-byte",
    storageBucket: "",
    messagingSenderId: credentials.firebase.messagingSenderId
};

firebase.initializeApp(firebaseConfig);

var firebaseLoggedIn = false;

firebase.auth().onAuthStateChanged(function(user) {
    firebaseLoggedIn = !!user;
})

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

    const uri = url.parse(req.url).path.split("?")[0];
    console.log("request uri:", uri)

    if (uri === "/api/todos") {
        fetchAndReturnTodos(res);
        return;
    }

    res.setHeader('Content-Type', 'text/html');

    const routeIsValid = routes.hasOwnProperty(uri);
    const resultUri = routeIsValid ? uri : "/404";

    writeFileForUri(resultUri, res)
        .then(() => res.end());
});

function writeFileForUri(uri, res) {
    return new Promise((resolve, reject) => {

        const filePath = path.join(process.cwd(), "public", routes[uri]);
        
        fs.readFile(filePath, (err, file) => {
            
            if (err) {
                res.statusCode = 500;
                res.write(err + "\n");
                return;
            }
            
            res.statusCode = 200;
            res.write(file);

            resolve();
        });
    })
}

function fetchAndReturnTodos(res) {

    if (firebaseLoggedIn) {
        var db = firebase.database();        

        db.ref('todos').once('value').then(function(snapshot) {
            res.write(JSON.stringify(snapshot.val()));
            res.end();
        });
    }
    else {
        console.log("logging in to firebase");
        firebase.auth().signInWithEmailAndPassword("ninebitsinabyte@gmail.com", "Sitekit123")
            .then(function() {
                var db = firebase.database();
                
                db.ref('todos').once('value').then(function(snapshot) {
                    res.write(JSON.stringify(snapshot.val()));
                    res.end();
                });
            })
            .catch(function(error) {
                console.error("Error authenticating with Firebase:\n" +
                    "code: " + error.code + "\n" +
                    "message: " + error.message);
            });
    }
}

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});