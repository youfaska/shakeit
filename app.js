var http = require('http');
var mysql = require('mysql');
var console_debug = "";
var server = http.createServer(function(req, res) {
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "qgmsenxs_elena",
	  password: "CuentaElena5*"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  console_debug = "CONECTED";
	});

    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response+console_debug);
});

server.listen();
