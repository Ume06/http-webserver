const http = require('http');
const fs = require('fs/promises');

const host = 'localhost';
const port = 8000;
var indexFile;

fs.readFile('./index.html').then((contents) => {
	indexFile = contents;
});
const requestListener = function (req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.writeHead(200);
	res.end(indexFile);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
