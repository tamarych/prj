document.querySelector('.reg').onclick = function() {
	renderPage('register');
};

function pushUserToHeader(user) {
	if (!localStorage.getItem('username') || !localStorage.getItem('phonenumber')) {
		return;
	}

	var newUser = document.getElementById('signed');
	newUser.innerHTML = '';
	newUser.innerHTML = '<p class="user_name">' + 'Your name: ' + localStorage.getItem('username');
	+'</p>';
	newUser.innerHTML += '<p class="user_cellphone">' + 'Cell number: ' + localStorage.getItem('phonenumber');
	+'</p>';
}

pushUserToHeader();

var users = [];

function register() {
	var username = document.getElementById('username');
	var phonenumber = document.getElementById('phonenumber');

	if(username.value != '' && phonenumber.value != '') {
		var user = {
			userName: username.value,
			phone: phonenumber.value
		};

		ajaxPost('/register', user, function(response) {
			if(response == 'fail') {
				alert('Введені дані для логіну не вірні, спробуйте ще раз');
				return;
			}

			localStorage.setItem('username', user.userName);
			localStorage.setItem('phonenumber', user.phone);

			pushUserToHeader();
		});
	} else {
		alert("Введіть ім'я та номер телефону!");
	}
}

function check() {
	var storedUserName = document.getElementById('sign-username');
	var storedPhoneNumber = document.getElementById('sign-phonenumber');

	var user = {
		userName: storedUserName.value,
		phone: storedPhoneNumber.value
	};

	ajaxPost('/login', user, function (response) {
		if(response == 'fail') {
			alert('Введені дані для логіну не вірні, спробуйте ще раз');
			return;
		}

		localStorage.setItem('username', user.userName);
		localStorage.setItem('phonenumber', user.phone);

		alert('Вітаємо, ' + storedUserName.value + '!');
		pushUserToHeader();
	});

}

function logout() {
	localStorage.removeItem('username');
	localStorage.removeItem('phonenumber');

	document.getElementById('signed').innerHTML = '';
	alert("Ви вийшли!");
}