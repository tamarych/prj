function setupMainPageListeners() {
	document.querySelector('.menu').onclick = function() {
		renderPage();
	};

	document.querySelector('.logo').onclick = function() {
		renderPage();
	};

	document.querySelector('.order').onclick = function() {
		order();
	};

	document.querySelector('[data-page-type]').onclick = function() {
		renderPage();
	};

	// Activate slider listeners
	slider();
}

window.onload = function() {

	loadHTML('view/main.html', setupMainPageListeners);
};

function renderPage(data) {

	if(event.target.className == 'reg') {
		loadHTML('view/registration.html', function() {
			document.querySelector('.reg-button').onclick = function() {
				register();
			};

			document.querySelector('.login-button').onclick = function() {
				check();
			};

			document.querySelector('.logout-button').onclick = function() {
				logout();
			};
		});
	}

	if(event.target.className == 'logo') {
		loadHTML('view/main.html', setupMainPageListeners);
	}

	if(event.target.className == 'search') {
		loadHTML('view/search.html', function() {
			document.querySelector('.search-result').onclick = function() {
				search();
			};
		});
	}

	if(event.target.getAttribute('data-page-type') == 'dishes') {
		loadHTML('view/dishes.html');
		renderDishesPage(event.target.getAttribute('data-dish-type'));
	}

	if(event.target.getAttribute('data-page-type') == 'lunch') {
		loadHTML('view/dishes.html');
		renderDishesPage(event.target.getAttribute('data-dish-type'));
	}

}


function loadHTML(url, afterContentLoaded) {
	ajaxGet(url, function(data) {
		document.querySelector('#main').innerHTML = data;

		afterContentLoaded && afterContentLoaded();
	});
}





