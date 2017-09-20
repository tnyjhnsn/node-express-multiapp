var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

/*
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
*/

require("../root/manager.js").init(app, express);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
