let express = require('express');
let app = express.Router();

app.get('/song', (req, res) => {
	res.send('get');
});

app.post('/song', (req, res) => {
	res.send('post');
});

app.put('/song', (req, res) => {
	res.send('put');
});

app.delete('/song', (req, res) => {
	res.send('delete');
});

module.exports = app;