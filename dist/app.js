"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var homeController = require("./controllers/home");
var app = express();
app.set('port', 3000);
app.get("/", homeController.index);
module.exports = app;
//# sourceMappingURL=app.js.map