let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let songs = require('./controllers/songs');

app.use(bodyParser.json());
app.get('/', (req, res) => {
	res.send('hello world');
});

app.use('/', songs);

app.listen(8080, function(){
	console.log('avicii is here')
});
