document.querySelector('.search').onclick = function() {
	renderPage();
}

function search() {
	ajaxGet('dishes-data.json', function(data) {
			dataMenu = JSON.parse(data);
			document.getElementById('results').innerHTML = '';
			var searchInput = document.getElementsByClassName('search-input')[0];
			for(var product in dataMenu) {
				for(var i = 0; i < dataMenu[product].length; i++) {
					var str = dataMenu[product][i].title.toLowerCase().toString();
					var result = str.match(searchInput.value.toLowerCase());
					if(result != null) {
						var div = document.createElement('div');
						if(dataMenu[product][i].pic) {
							div.innerHTML = "<img src='" + dataMenu[product][i].pic + "'>";
						}
						div.className = "product";
						div.innerHTML += '<br><b>Назва</b>: ' + '<p class="d_name">' + dataMenu[product][i].title + '</p>';
						div.innerHTML += '<b>Інгридієнти</b>: ' + '<p class="d_ingredients">' + dataMenu[product][i].ingredients + '</p>';
						div.innerHTML += '<b>Вартість</b>: ' + '<p class="d_price">' + dataMenu[product][i].price + '</p>';
						div.innerHTML += '<button class="order-dish">Замовити</button>';
						results.appendChild(div);
						div.getElementsByClassName('order-dish')[0].addEventListener('click', addToCart);
					}

				}
				if(document.getElementsByClassName('product')[0] == undefined) {
					document.getElementById('results').innerHTML = '<b>Немає співпадінь. Спробуйте ще раз.</b>';
				}

			}
		}
	)
}