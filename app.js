var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('/home/ftp/www'));


app.use(function  (req, res, next) {
    res.status(404).send('找不到網頁!!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('ERRPR 500!!');
});

var server = http.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});
