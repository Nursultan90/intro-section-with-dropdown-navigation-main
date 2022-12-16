window.onload = function () {
	// ========CONTENT-MOVING==========================================================================================================================
	//Объявляем переменные
	const parent = document.querySelector('.main__body');
	const item = document.querySelector('.main__img');
	const image = document.getElementById('main-image');
	//Слушаем изменение размера экрана
	window.addEventListener('resize', moveImg);
	//Функция
	function moveImg() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width < 992) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[0]);
				item.classList.add('done');
				image.setAttribute("src", "images/image-hero-mobile.png");
			}
		} else {
			if (item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.remove('done');
				image.setAttribute("src", "images/image-hero-desktop.png");
			}
		}
	}
	//Вызываем функцию
	moveImg();

	// =======HEADER-MOVING===========================================================================================================================
	const user = document.querySelector('.header__user');
	const menu = document.querySelector('.header__menu')
	const headerBody = document.querySelector('.header__body');
	window.addEventListener('resize', moveHeader);
	function moveHeader() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width < 768) {
			if (!user.classList.contains('done')) {
				menu.insertBefore(user, menu.children[1]);
				user.classList.add('done');
			}
		} else {
			if (user.classList.contains('done')) {
				headerBody.insertBefore(user, headerBody.children[2]);
				user.classList.remove('done');
			}
		}
	}
	moveHeader();

	// ======SUB-MENU============================================================================================================================
	document.addEventListener('click', documentActions);

	function documentActions(e) {
		const targetElement = e.target;

		if (targetElement.parentNode.classList.contains('menu__item')) {
			if (targetElement.parentNode.classList.contains('menu__item--active')) {
				targetElement.parentNode.classList.remove('menu__item--active');
			} else {
				document.querySelectorAll('.menu__item').forEach((item) =>
					item.classList.remove('menu__item--active')
				)
				targetElement.parentNode.classList.add('menu__item--active');
			}
		} else {
			document.querySelectorAll('.menu__item').forEach((item) =>
				item.classList.remove('menu__item--active'))
		}
	}

	// =====BURGER=============================================================================================================================
	var burgerBtn = document.querySelector('.burger');
	var body = document.querySelector('body');
	var darkBody = document.querySelector('.dark-bg');
	burgerBtn.addEventListener('click', function () {
		burgerBtn.classList.toggle('active');
		menu.classList.toggle('open');
		body.classList.toggle('lock');
		darkBody.classList.toggle('active');
	})
}