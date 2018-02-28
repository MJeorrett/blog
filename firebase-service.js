const firebase = require('firebase');
const credentials = require('./credentials');

const firebaseConfig = {
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
});

const db = firebase.database();
authenticate();

function authenticate() {

    return new Promise(function (resolve, reject) {

        if (firebaseLoggedIn) {
            resolve();
            return;
        }

        console.log("logging in to firebase");

        firebase.auth().signInWithEmailAndPassword("ninebitsinabyte@gmail.com", "Sitekit123")
            .then(function() {
                resolve();
            })
            .catch(function(error) {
                console.error("Error authenticating with Firebase:\n" +
                    "code: " + error.code + "\n" +
                    "message: " + error.message);

                reject("Firebase authentication failed");
            });
    });
}

module.exports = {
    fetchRefOnce: function(ref) {
        return new Promise(function(resolve, reject) {
            authenticate().then(function() {
                db.ref(ref).once('value').then(function(snapshot) {
                    resolve(snapshot.val());
                });
            })
        });
    }
};