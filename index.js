const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/app'));
app.use(express.json());

const fs = require('fs');

try {
	if(!fs.existsSync('users.json')) {
		fs.writeFileSync('users.json', JSON.stringify([]));
	}

	var rawUsersData = fs.readFileSync('users.json');
	var users = JSON.parse(rawUsersData);
} catch (e) {
	process.exit(e);
}


app.post('/register', function(httpRequest, httpResponse) {

	var postData = httpRequest.body;

	if(!postData.userName) {
		httpResponse.send('fail');
		return;
	}

	if(!postData.phone) {
		httpResponse.send('fail');
		return;
	}

	var user = {
		userName: postData.userName,
		phone: postData.phone
	};

	users.push(user);

	fs.writeFileSync('users.json', JSON.stringify(users));

	httpResponse.send('ok');
});

app.post('/login', function(httpRequest, httpResponse) {

	var postData = httpRequest.body;

	if(users.length == 0) {
		httpResponse.send('fail');
		return;
	}

	for (var i = 0; i < users.length; i++) {
		if(users[i].userName != postData.userName) {
			continue;
		}

		if(users[i].phone == postData.phone) {
			httpResponse.send('ok');
			return;
		}

		httpResponse.send('fail');
		return;
	}
});

app.listen(port, (err) => {
	if(err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
});