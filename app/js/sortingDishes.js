function toUpperSort() {
	var dishes = document.getElementById('products');
	for(var i = 0; i < products.children.length; i++) {
		for(var j = i; j < products.children.length; j++) {
			if(parseInt(dishes.children[i].getElementsByClassName('d_price')[0].innerText) > parseInt(dishes.children[j].getElementsByClassName('d_price')[0].innerText)) {
				replacedNode = dishes.replaceChild(dishes.children[j], dishes.children[i]);
				insertAfter(replacedNode, dishes.children[i]);
			}
		}
	}
}

function toLowerSort() {
	var dishes = document.getElementById('products');
	for(var i = 0; i < products.children.length; i++) {
		for(var j = i; j < products.children.length; j++) {
			if(parseInt(dishes.children[i].getElementsByClassName('d_price')[0].innerText) < parseInt(dishes.children[j].getElementsByClassName('d_price')[0].innerText)) {
				replacedNode = dishes.replaceChild(dishes.children[j], dishes.children[i]);
				insertAfter(replacedNode, dishes.children[i]);
			}
		}
	}
}

function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


function filterDishes() {
	var selected = document.getElementsByClassName('filter')[0];
	var disheslist = document.getElementById('products');

	var dishes = disheslist.getElementsByClassName('product');
	for(var i = 0; i < dishes.length; i++) {
		if(dishes[i].classList.contains(this.value)) {
			dishes[i].style.display = 'block';
		} else {
			dishes[i].style.display = 'none';
		}
	}
}