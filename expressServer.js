const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
const port = 8000;
const options = { root: path.join(__dirname) };

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/html')
	res.sendFile('index.html', options);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});


