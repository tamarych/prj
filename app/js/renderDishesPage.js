var dataMenu;

function renderDishesPage(dishtype) {
	ajaxGet('dishes-data.json', function(data) {

		dataMenu = JSON.parse(data);

		for(var dishes in dataMenu[dishtype]) {
			var div = document.createElement('div');
			div.className = "product";
			dataMenu[dishtype][dishes].veggie ? div.className += " veggie" : div.className += " meat";

			if(dataMenu[dishtype][dishes].pic) {
				div.innerHTML = "<img src='" + dataMenu[dishtype][dishes].pic + "'>";
			}

			div.innerHTML += '<br><b>Назва</b>: ' + '<p class="d_name">' + dataMenu[dishtype][dishes].title + '</p>';
			div.innerHTML += '<b>Інгридієнти</b>: ' + '<p class="d_ingredients">' + dataMenu[dishtype][dishes].ingredients + '</p>';
			div.innerHTML += '<b>Вартість</b>: ' + '<p class="d_price">' + dataMenu[dishtype][dishes].price + '</p>';
			div.innerHTML += '<input class="order-dish" type="submit" value="Замовити">';
			products.appendChild(div);
			div.getElementsByClassName('order-dish')[0].addEventListener('click', addToCart);
			main.getElementsByClassName('toUpperSort')[0].addEventListener('click', toUpperSort);
			main.getElementsByClassName('toLowerSort')[0].addEventListener('click', toLowerSort);
			main.getElementsByClassName('filter')[0].addEventListener('change', filterDishes);
		}
	})
}