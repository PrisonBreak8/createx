'use strict';

//@prepros-append script.js

//@prepros-append swiper.js

//@prepros-append mixitup.js


// Меню бургер
var iconMenu = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.navbar');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};

// Прокрутка при клике
var menuLinks = document.querySelectorAll('.menu__sub-link[data-goto]');
if (menuLinks.length > 0) {
	var onMenuLinkClick = function onMenuLinkClick(e) {
		var menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			var gotoBlock = document.querySelector(menuLink.dataset.goto);
			var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	};

	menuLinks.forEach(function (menuLink) {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
}

// БЛОК ФОРМ
var signInBtn = document.querySelector('.signin-btn');
var signUpBtn = document.querySelector('.signup-btn');
var formBox = document.querySelector('.form-box');
var toggle = document.querySelector('.toggle');

signUpBtn.addEventListener('click', function () {
	formBox.classList.add('active');
	toggle.classList.add('active');
});

signInBtn.addEventListener('click', function () {
	formBox.classList.remove('active');
	toggle.classList.remove('active');
});

// Инициализируем Swiper
var myImageSlider = new Swiper('.reviews-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next ',
		prevEl: '.swiper-button-prev '
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination'

		//// Буллеты
		//type: 'bullets',
		//clickable: true,
		//// Динамические буллеты
		//dynamicBullets: true,
		//// Кастомные буллеты
		//renderBullet: function (index, className) {
		//	return '<span class="' + className + '">' + (index + 1) + '</span>';
		//},

		/*
  // Фракция
  type: 'fraction',
  // Кастомный вывод фракции
  renderFraction: function (currentClass, totalClass) {
  	return 'Фото <span class="' + currentClass + '"></span>' +
  		' из ' +
  		'<span class="' + totalClass + '"></span>';
  },
  */
		// Прогрессбар
		//type: 'progressbar'
	},
	// Скролл
	/*
 scrollbar: {
 	el: '.swiper-scrollbar',
 	// Возможность перетаскивать скролл
 	draggable: true
 },
 */

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 0
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 4,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: false,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,

	// Автопрокрутка

	//autoplay: {
	//	// Пауза между прокруткой
	//	delay: 1900,
	//	// Закончить на последнем слайде
	//	stopOnLastSlide: true,
	//	// Отключить после ручного переключения
	//	disableOnInteraction: false
	//},


	// Скорость
	speed: 500,

	// Вертикальный слайдер
	direction: 'horizontal',

	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',

	/*
 // Эффекты переключения слайдов.
 // Cмена прозрачности
 effect: 'fade',
 
 // Дополнение к fade
 fadeEffect: {
 	// Параллельная
 	// смена прозрачности
 	crossFade: true
 },
 */
	/*
 // Эффекты переключения слайдов.
 // Переворот
 effect: 'flip',
 
 // Дополнение к flip
 flipEffect: {
 	// Тень
 	slideShadows: true,
 	// Показ только активного слайда
 	limitRotation: true
 },
 */
	/*
 // Эффекты переключения слайдов.
 // Куб
 effect: 'cube',
 
 // Дополнение к cube
 cubeEffect: {
 	// Настройки тени
 	slideShadows: true,
 	shadow: true,
 	shadowOffset: 20,
 	shadowScale: 0.94
 },
 */
	/*
 // Эффекты переключения слайдов.
 // Эффект потока
 effect: 'coverflow',
 
 // Дополнение к coverflow
 coverflowEffect: {
 	// Угол
 	rotate: 20,
 	// Наложение
 	stretch: 50,
 	// Тень
 	slideShadows: true,
 },
 */

	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {

		260: {
			slidesPerView: 1
		},

		572: {
			slidesPerView: 2
		},

		768: {
			slidesPerView: 3
		},

		991: {
			slidesPerView: 4
		}
	},

	/*
 // Брейк поинты (адаптив)
 // Соотношение сторон
 breakpoints: {
 	'@0.75': {
 		slidesPerView: 1,
 	},
 	'@1.00': {
 		slidesPerView: 2,
 	},
 	'@1.50': {
 		slidesPerView: 3,
 	}
 },
 */

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1
	},

	// Миниатюры (превью)
	/*
 thumbs: {
 	// Свайпер с мениатюрами
 	// и его настройки
 	swiper: {
 		el: '.image-mini-slider',
 		slidesPerView: 5,
 	}
 },
 */
	/*
 // Передача управления
 controller: {
 	control: myTextSlider
 },
 */

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true

	// Виртуальные слайды
	// формирование слайдера
	/*
 virtual: {
 	slides: (function () {
 		let slide = []
 		for (let i = 0; i < 500; i++) {
 			slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
 		}
 		return slide;
 	}()),
 },
 */
	/*
 // Доступность
 a11y: {
 	// Включить/выключить
 	enabled: true,
 	// Сообщения
 	prevSlideMessage: 'Previous slide',
 	nextSlideMessage: 'Next slide',
 	firstSlideMessage: 'This is the first slide',
 	lastSlideMessage: 'This is the last slide',
 	paginationBulletMessage: 'Go to slide {{index}}',
 	notificationClass: 'swiper-notification',
 	containerMessage: '',
 	containerRoleDescriptionMessage: '',
 	itemRoleDescriptionMessage: '',
 	// и т.д.
 },
 */
	/*
 // События
 on: {
 	// Событие инициализации
 	init: function () {
 		console.log('Слайдер запущен!');
 	},
 	// Событие смены слайда
 	slideChange: function () {
 		console.log('Слайд переключен');
 	}
 },
 */
});

/*
// Слайдер в слайдере
new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация
	// пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
	},
	// Корректная работа
	// перетаскивания\свайпа
	// для дочернего слайдера
	nested: true,
});
*/
/*
// Еще один слайдер
let myTextSlider = new Swiper('.text-slider', {
	// Количество слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: 30,
});

// Передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
*/

/*
// Параллакс слайдер
new Swiper('.parallax-slider', {
	// Включаем параллакс
	parallax: true,
	// скорость переключения
	speed: 2000,
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
*/

/*
// Параметры
// Получение
let qSlides = myImageSlider.slides.length;

// Изменение
myImageSlider.params.speed = 3000;
*/

/*
// Методы
// Обновить слайдер
myImageSlider.update();

// Переключится на слайд 2, скорость 800
myImageSlider.slideTo(2, 800);
*/

/*
// События
// Событие смены слайда
myImageSlider.on('slideChange', function () {
	console.log('Слайд переключен');
});
*/

/*
// Запуск автоппрокрутки при наведении
let sliderBlock = document.querySelector('.image-slider');

// myImageSlider  - это переменная которой присвоен слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
	myImageSlider.autoplay.stop();
});

*/

/*
// Фракция
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});
*/

// SWIPER =================================
var swiper = new Swiper(".testimonials-slider", {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next ',
		prevEl: '.swiper-button-prev '
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',

		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function renderBullet(index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}

		/*
  // Фракция
  type: 'fraction',
  // Кастомный вывод фракции
  renderFraction: function (currentClass, totalClass) {
  	return 'Фото <span class="' + currentClass + '"></span>' +
  		' из ' +
  		'<span class="' + totalClass + '"></span>';
  },
  */
		// Прогрессбар
		//type: 'progressbar'
	},
	// Скролл
	/*
 scrollbar: {
 	el: '.swiper-scrollbar',
 	// Возможность перетаскивать скролл
 	draggable: true
 },
 */

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: false,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 0
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: false,

	// Отступ между слайдами
	spaceBetween: 20,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,

	// Автопрокрутка

	//autoplay: {
	//	// Пауза между прокруткой
	//	delay: 1900,
	//	// Закончить на последнем слайде
	//	stopOnLastSlide: true,
	//	// Отключить после ручного переключения
	//	disableOnInteraction: false
	//},


	// Скорость
	speed: 500,

	// Вертикальный слайдер
	direction: 'horizontal',

	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',

	/*
 // Эффекты переключения слайдов.
 // Cмена прозрачности
 effect: 'fade',
 
 // Дополнение к fade
 fadeEffect: {
 	// Параллельная
 	// смена прозрачности
 	crossFade: true
 },
 */
	/*
 // Эффекты переключения слайдов.
 // Переворот
 effect: 'flip',
 
 // Дополнение к flip
 flipEffect: {
 	// Тень
 	slideShadows: true,
 	// Показ только активного слайда
 	limitRotation: true
 },
 */
	/*
 // Эффекты переключения слайдов.
 // Куб
 effect: 'cube',
 
 // Дополнение к cube
 cubeEffect: {
 	// Настройки тени
 	slideShadows: true,
 	shadow: true,
 	shadowOffset: 20,
 	shadowScale: 0.94
 },
 */
	/*
 // Эффекты переключения слайдов.
 // Эффект потока
 effect: 'coverflow',
 
 // Дополнение к coverflow
 coverflowEffect: {
 	// Угол
 	rotate: 20,
 	// Наложение
 	stretch: 50,
 	// Тень
 	slideShadows: true,
 },
 */

	// Брейк поинты (адаптив)
	// Ширина экрана
	//breakpoints: {

	//	260: {
	//		slidesPerView: 1,
	//	},

	//	572: {
	//		slidesPerView: 2,
	//	},

	//	768: {
	//		slidesPerView: 3,
	//	},

	//	991: {
	//		slidesPerView: 4,
	//	},
	//},


	/*
 // Брейк поинты (адаптив)
 // Соотношение сторон
 breakpoints: {
 	'@0.75': {
 		slidesPerView: 1,
 	},
 	'@1.00': {
 		slidesPerView: 2,
 	},
 	'@1.50': {
 		slidesPerView: 3,
 	}
 },
 */

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1
	},

	// Миниатюры (превью)
	/*
 thumbs: {
 	// Свайпер с мениатюрами
 	// и его настройки
 	swiper: {
 		el: '.image-mini-slider',
 		slidesPerView: 5,
 	}
 },
 */
	/*
 // Передача управления
 controller: {
 	control: myTextSlider
 },
 */

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true

	// Виртуальные слайды
	// формирование слайдера
	/*
 virtual: {
 	slides: (function () {
 		let slide = []
 		for (let i = 0; i < 500; i++) {
 			slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
 		}
 		return slide;
 	}()),
 },
 */
	/*
 // Доступность
 a11y: {
 	// Включить/выключить
 	enabled: true,
 	// Сообщения
 	prevSlideMessage: 'Previous slide',
 	nextSlideMessage: 'Next slide',
 	firstSlideMessage: 'This is the first slide',
 	lastSlideMessage: 'This is the last slide',
 	paginationBulletMessage: 'Go to slide {{index}}',
 	notificationClass: 'swiper-notification',
 	containerMessage: '',
 	containerRoleDescriptionMessage: '',
 	itemRoleDescriptionMessage: '',
 	// и т.д.
 },
 */
	/*
 // События
 on: {
 	// Событие инициализации
 	init: function () {
 		console.log('Слайдер запущен!');
 	},
 	// Событие смены слайда
 	slideChange: function () {
 		console.log('Слайд переключен');
 	}
 },
 */
});

//$(function () {

//	$(document).ready(function () {
//		$('.portfolio__img').fancybox({
//			afterClose: function () {
//				$('.portfolio__img').css('display', 'block');
//			}
//		});
//	});


//	var mixer = mixitup('.engoy__block');

//});