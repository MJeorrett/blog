var app = require('./app');
var server = app.listen(app.get('port'), function () {
    console.info("Blog is running at http://localhost:" + app.get('port') + ".");
});
//# sourceMappingURL=server.js.map