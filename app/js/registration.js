document.querySelector('.reg').onclick = function() {
	renderPage();
};

function pushUserToHeader() {
	var newUser = document.getElementById('signed');
	newUser.innerHTML = '';
	newUser.innerHTML = '<p class="user_name">' + 'Your name: ' + localStorage.getItem('username', username.value);
	+'</p>';
	newUser.innerHTML += '<p class="user_cellphone">' + 'Cell number: ' + localStorage.getItem('phonenumber', phonenumber.value);
	+'</p>';
}

var users = [];

function register() {
	var username = document.getElementById('username');
	var phonenumber = document.getElementById('phonenumber');
	if(username.value != '' && phonenumber.value != '') {
		var user = [];
		user.push(username.value);
		user.push(phonenumber.value);
		localStorage.setItem('username', username.value);
		localStorage.setItem('phonenumber', phonenumber.value);
		users.push(user);
		pushUserToHeader();
	} else {
		alert("Введіть ім'я та номер телефону!");
	}
}

function check() {
	var storedUserName = document.getElementById('sign-username');
	var storedPhoneNumber = document.getElementById('sign-phonenumber');
	for(var i = 0; i < users.length; i++) {
		if(users[i][0] == storedUserName.value) {
			if(users[i][1] == storedPhoneNumber.value) {
				localStorage.setItem('username', storedUserName.value);
				localStorage.setItem('phonenumber', storedPhoneNumber.value);
				alert('Вітаємо, ' + storedUserName.value + '!');
				pushUserToHeader();
			} else {
				localStorage.clear();
				document.getElementById('signed').innerHTML = '';
				alert('Ви не зареєстровані!');
			}
		}
	}
}

function logout() {
	document.getElementById('signed').innerHTML = '';
	localStorage.clear();
	alert("Ви вийшли!");
}