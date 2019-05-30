var mobileBtnRight = document.querySelector('.mobile-button-right');
var headerMenu = document.querySelector('.headerMenu');
var closeBtnRight = document.querySelector('.close-menu-right');

mobileBtnRight.addEventListener('click', function() {
	headerMenu.className += ' open';
});

closeBtnRight.addEventListener('click', function() {
	headerMenu.className = 'headerMenu';
});

var mobileBtnLeft = document.querySelector('.mobile-button-left');
var menu = document.querySelector('.menu');
var closeBtnLeft = document.querySelector('.close-menu-left');

mobileBtnLeft.addEventListener('click', function() {
	menu.className += ' open';
});

closeBtnLeft.addEventListener('click', function() {
	menu.className = 'menu';
});

