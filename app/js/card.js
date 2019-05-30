var modal = document.getElementsByClassName("card")[0];
var btn = document.getElementById("open-card");
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
	modal.style.display = "block";
};

span.onclick = function() {
	modal.style.display = "none";
};

window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
};

function addToCart(title, price) {
	var button = event.target;
	var shopItem = button.parentElement;

	var dishContainer = document.getElementById('orderlist');
	var dishList = dishContainer.getElementsByClassName('ordered');

	if(dishList.length > 0) {
		for(var i = 0; i < dishList.length; i++) {
			var cardDishNames = dishContainer.getElementsByClassName('order_name')[i].innerText;
			var addedDishName = shopItem.getElementsByClassName('d_name')[0].innerText;
			if(cardDishNames == shopItem.getElementsByClassName('d_name')[0].innerText) {
				alert('Ця позиція вже додана у кошик!');
				return;
			}
		}
	}

	var orderItem = document.createElement('div');
	var button = event.target;
	var shopItem = button.parentElement;
	orderItem.className = 'ordered';
	orderItem.innerHTML = '<b>Назва</b>: <span class="order_name">' + shopItem.getElementsByClassName('d_name')[0].innerHTML + '</span>';
	orderItem.innerHTML += '<span><b>Вартість</b>:</span>';
	orderItem.innerHTML += '<span class="order_price">' + shopItem.getElementsByClassName('d_price')[0].innerHTML + ' </span>';
	orderItem.innerHTML += '<br><b>Кількість:</b> <input class="quantity" type="number" value="1">';
	orderItem.innerHTML += '<input class="delete-order" type="submit" value="Видалити">';
	orderlist.appendChild(orderItem);
	orderItem.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged);
	orderItem.getElementsByClassName('delete-order')[0].addEventListener('click', removeCartItem);
	updateCartTotal();
}


function updateCartTotal() {
	var dishContainer = document.getElementById('orderlist');
	var dishList = dishContainer.getElementsByClassName('ordered');
	var total = 0;
	for(var i = 0; i < dishList.length; i++) {
		var dishPrice = parseInt(dishList[i].getElementsByClassName('order_price')[0].innerText);
		var dishQuantity = dishList[i].getElementsByClassName('quantity')[0];
		var quantity = dishQuantity.value;
		total = total + dishPrice * quantity;
	}
	document.getElementById('card-total').innerText = total;
}

function quantityChanged(event) {
	var input = event.target;

	if(isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}

	updateCartTotal();
}

function removeCartItem() {
	var buttonClicked = event.target;
	buttonClicked.parentElement.remove();
	updateCartTotal();
}

function order() {
	if(orderlist.innerHTML == '') {
		alert('Ви нічого не замовили :(');
		return;
	}
	if(document.getElementById('signed').innerHTML == '') {
		alert("Спочатку увійдіть або зареєструйтесь, щоб ми могли з Вами зв'язатись!");

	} else {
		alert('Дякуюємо за замовлення! Чекайте на дзвінок оператора за вказанним Вами номером телефону!');
	}

}