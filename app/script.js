function setupMainPageListeners() {
	document.querySelector('.menu').onclick = function(event) {
		renderPage('lunch', {
			dishType: event.target.getAttribute('data-dish-type')
		});
	};

	document.querySelector('.logo').onclick = function() {
		renderPage('main');
	};

	document.querySelector('.order').onclick = function() {
		order();
	};

	document.querySelector('[data-page-type]').onclick = function(event) {
		renderPage('dishes', {
			dishType: event.target.getAttribute('data-dish-type')
		});
	};

	// Activate slider listeners
	slider();
}

window.onload = function() {

	loadTemplate('main_template', setupMainPageListeners);
};

function renderPage(page, options) {

	switch(page) {

		case 'register': {
			loadTemplate('registration_template', function() {
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

			break;
		}

		case 'main': {
			loadTemplate('main_template', setupMainPageListeners);

			break;
		}

		case 'search': {
			loadTemplate('search_template', function() {
				document.querySelector('.search-result').onclick = function() {
					search();
				};
			});

			break;
		}

		case 'dishes': {
			loadTemplate('dishes_template');
			renderDishesPage(options.dishType);

			break;
		}

		case 'lunch': {
			loadTemplate('dishes_template');
			renderDishesPage(options.dishType);
			renderDishesPage(event.target.getAttribute('data-dish-type'));

			break;
		}

	}

}





