function ajaxGet(url, callback) {
	var f = callback || function(data) { };

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			f(request.responseText);
		}
	};

	request.open('GET', url);
	request.send();
}

function ajaxPost(url, params, callback) {
	var f = callback || function(data) { };

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			f(request.responseText);
		}
	};

	request.open("POST", url, true);
	request.setRequestHeader('Content-Type', 'application/json');

	request.send(JSON.stringify(params));
}