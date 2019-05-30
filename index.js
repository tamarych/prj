const express = require('express');
const app = express();
const port = 3000;

app.get('/index.html', (request, response) => {
	response.send('Hello from Express!')
});

app.use(express.static(__dirname + '/app'));

app.listen(port, (err) => {
	if(err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
});