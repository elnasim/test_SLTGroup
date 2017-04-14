$(function() {

	//toggle-mnu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".header__top-line__hidden-menu").slideToggle();
		return false;
	});

	//magnific-popup
	$('.s2__item__hover__preview').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-with-zoom', 
		image: {
			verticalFit: true
		},
	});

	//owl-carousel
	$('.owl-carousel').owlCarousel({
		items: 4,
		loop: true,
		nav: 'true',
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		margin: 60,
		responsive:{
			0:{
				items:1,
				nav: false,
			},
			320:{
				items:2,
				nav: false,
			},
			480:{
				items:3,
				nav: false,
			},
			768:{
				items:4,
				nav: true,
			},
		},
	});

});
