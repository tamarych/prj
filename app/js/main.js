function slider() {
	var btn_prev = document.querySelector('#prev');
	var btn_next = document.querySelector('#next');


	btn_prev.onclick = function() {
		var activeSlide = document.querySelector('.slider > .active');

		activeSlide.style.display = 'none';
		activeSlide.className = '';

		var prevSlide = activeSlide.previousElementSibling;

		if(!prevSlide) {
			prevSlide = document.querySelector('.slider > img:last-child');
		}

		prevSlide.style.display = 'block';
		prevSlide.className = 'active';
	};

	btn_next.onclick = function() {
		var activeSlide = document.querySelector('.slider > .active');

		activeSlide.style.display = 'none';
		activeSlide.className = '';

		var nextSlide = activeSlide.nextElementSibling;

		if(!nextSlide) {
			nextSlide = document.querySelector('.slider > img');
		}

		nextSlide.style.display = 'block';
		nextSlide.className = 'active';
	}
}
