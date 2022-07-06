var prevBtn = $('.main_slider .controls .prev');
var nextBtn = $('.main_slider .controls .next');

var mainSlides = $('.slides').bxSlider({
	easing: 'ease-in',
	controls: false,
	pager: true,
	pagerSelector: '.main_slider .pager',
});

prevBtn.click(function () {
	mainSlides.goToPrevSlide();
});
nextBtn.click(function () {
	mainSlides.goToNextSlide();
});

$('.Parallax_section').parallax({
	imageSrc: './images/paralax_bg.jpg',
	speed: 0.6,
});

// 스크롤 숫자애니매이션
const plusIcon = $('.Stats_excerpt_section .item_info i');
const plusIconHieght = plusIcon.offset().top - 800;

$(function () {
	gsap.registerPlugin(ScrollTrigger);

	$('.count').each(function (index, element) {
		var count = $(this),
			zero = {
				val: 0,
			},
			num = count.data('number'),
			split = (num + '').split('.'),
			decimals = split.length > 1 ? split[1].length : 0;

		gsap.to(zero, {
			val: num,
			duration: 3,
			scrollTrigger: element,
			onUpdate: function () {
				count.text(zero.val.toFixed(decimals));
			},
		});
	});
});

$(window).scroll(function () {
	if (window.scrollY > plusIconHieght) {
		setTimeout(() => {
			plusIcon.stop().animate({ opacity: 1 });
		}, 3000);
	}
});

// blog list Multiple slideshow

var blogPrevBtn = $('.latest_blog_wrap .controls .prev');
var blogNextBtn = $('.latest_blog_wrap .controls .next');

var blogSlides = $('.latest_blog_list').bxSlider({
	easing: 'ease-in',
	controls: false,
	pager: false,
	minSlides: 1,
	maxSlides: 3,
	slideWidth: 370,
	moveSlides: 1,
});

blogPrevBtn.click(function () {
	blogSlides.goToPrevSlide();
});
blogNextBtn.click(function () {
	blogSlides.goToNextSlide();
});

// portfolio filtering

const $sortBtn = $('.sorting span');
const $targetList = $('.portfolio_section_list li');
$sortBtn.click(function () {
	$sortBtn.removeClass('active');
	$(this).addClass('active');
});

var mixer = mixitup('.portfolio_section_list', {
	animation: {
		effects: 'fade scale(0.5)',
		easing: 'ease-in-out',
	},
});

//our partner slider

var partnerSlides = $('.partner_list').bxSlider({
	easing: 'ease-in',
	controls: false,
	pager: false,
	minSlides: 3,
	maxSlides: 6,
	slideWidth: 170,
	slideMargin: 10,
	moveSlides: 1,
	auto: true,
	pause: 2000,
	speed: 1000,
});

// testimonial tab slide

var $tabLink = $('.tablinks span');
var $targetItem = $('.review_contents .item');

$tabLink.click(function () {
	$tabLink.removeClass('active');
	$(this).addClass('active');
	var $targetItemIdx = $(this).index();
	$targetItem.removeClass('active');
	$targetItem.eq($targetItemIdx).addClass('active');
});

// accordion

var $accrodionHeader = $('.accordion header');
var $accContent = $('.accordion div');

$accrodionHeader.click(function () {
	$accrodionHeader.removeClass('active');
	var $this = $(this);
	$accContent.slideUp();
	$this.addClass('active').next().slideDown();
});
$accrodionHeader.eq(0).trigger('click');

// // google map

// function initMap() {
// 	const Ottav = { lat: 40.8623278, lng: -73.4247448 };
// 	const map = new google.maps.Map(document.querySelector('#ourmap'), {
// 		zoom: 16,
// 		center: Ottav,
// 	});
// 	const contentString =
// 		'<div id="map-content">' +
// 		'<h2 class="title_bar center">adress</h2>' +
// 		'<p>623 New York Ave, Huntington, NY 11743, USA<br/>' +
// 		'Phone:  (123) 45 67 890</br>' +
// 		'hr.Expirex@gmail.com</p>' +
// 		'</div>';
// 	const infowindow = new google.maps.InfoWindow({
// 		content: contentString,
// 	});
// 	const marker = new google.maps.Marker({
// 		position: Ottav,
// 		map,
// 		title: 'Expire',
// 	});

// 	marker.addListener('click', () => {
// 		infowindow.open({
// 			anchor: marker,
// 			map,
// 			shouldFocus: false,
// 		});
// 	});
// }

// window.initMap = initMap;

$('.hamburger-button').on('click', function (event) {
	event.preventDefault();

	$(this).toggleClass('active');
	$('.main-left-menu').toggleClass('visible');
	$('.main-right-menu').toggleClass('visible');
});

// 네브바 스크롤
const $navLogo = $('nav h1 .logo');
const $navText = $('nav h1 .logo_text');
const toggleBtn = $('.hamburger-botton');

console.log('toggleBtn: ', toggleBtn);

$(window).scroll(function () {
	if (window.scrollY > 100) {
		$navText.fadeOut(300, 'easeInOutCubic');

		$('.navbar')
			.css({ backgroundColor: 'rgba(0, 0, 0, 0.5)' })
			.stop()
			.animate({ height: '100px' }, 300, 'easeInOutCubic');
		$('.main-left-menu').css({ top: '100px' });
		$('.main-right-menu').css({ top: '190px' });
	} else {
		$navText.fadeIn(300, 'easeInOutCubic');
		$('.navbar')
			.css({ backgroundColor: 'rgba(0, 0, 0, 0.5)' })
			.stop()
			.animate({ height: '170px' }, 300, 'easeInOutCubic');
		$('.main-left-menu').css({ top: '170px' });
		$('.main-right-menu').css({ top: '260px' });
	}
});
