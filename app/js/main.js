/*Текстовый слайдер*/
	$('.p-lineslider').owlCarousel({
		loop:true,
		nav:false,
		dots: false,
		animateOut: 'fadeOut',
		items:1,
		autoplay:true,
		autoplayHoverPause:true,
		autoplayTimeout: 10000
	});
	$('.p-scrollslider').owlCarousel({
		loop:true,
		nav:false,
		dots: false,
		items:5
	});

$(function() {
	if( $(window).width() >= 1070 ) {
		$('.h-nav__item').hover(function() {
			$('.h-nav__item').removeClass('active');
			var carrentnav = $(this).children('.h-nav__link').attr('name');
			if(carrentnav == "togwomen") {
				$('.h-subnav').hide();
				$('.h-nav__trang').stop(false, true).animate({
					left: "30px"
				}, 300);
				$(this).addClass('active');
				$('.h-subnav-1').show();
			}
			if(carrentnav == "togmen") {
				$('.h-subnav').hide();
				$('.h-nav__trang').stop(false, true).animate({
					left: "125px"
				}, 300);
				$(this).addClass('active');
				$('.h-subnav-2').show();
			}
			if(carrentnav == "togkids") {
				$('.h-subnav').hide();
				$('.h-nav__trang').stop(false, true).animate({
					left: "232px"
				}, 300);
				$(this).addClass('active');
				$('.h-subnav-3').show();
			}
		});

		$('.h-subnav__item').hover(function() {
			$(this).children('.header__menu').stop(false, true).fadeIn(100);
		}, function() {
			$(this).children('.header__menu').stop(false, true).hide();
		});
	}

	if( $(window).width() <= 1069 ) {
		$('.h-mobnav__link-bars').on('click', function() {
			if($('.wrapper').hasClass('active') == false) {
				$('.wrapper').addClass('active');
				$('.header__mobnav').show();
				$('.wrapper-bg').show();
				$('.wrapper-bg').stop(false, true).animate({
					left: "280px"
				});
				$('.wrapper').stop(false, true).animate({
					left: "280px"
				});
				$('.header').stop(false, true).animate({
					left: "280px"
				});
				return false;
			} else {
				$('.wrapper').removeClass('active');
				$('.header__mobnav').hide();
				$('.wrapper-bg').hide();
				$('.wrapper-bg').stop(false, true).animate({
					left: "0"
				});
				$('.wrapper').stop(false, true).animate({
					left: "0"
				});
				$('.header').stop(false, true).animate({
					left: "0"
				});
				return false;
			}
		});
		$('.wrapper-bg').on('click', function() {
			$('.wrapper').removeClass('active');
			$('.header__mobnav').hide();
			$('.wrapper-bg').hide();
			$('.wrapper-bg').stop(false, true).animate({
				left: "0"
			});
			$('.wrapper').stop(false, true).animate({
				left: "0"
			});
			$('.header').stop(false, true).animate({
				left: "0"
			});
			return false;
		});
		$('.h-subnav__item-menu .h-subnav__link').on('click', function() {
			$(this).parent('.h-subnav__item-menu').children('.header__h-menu').animate({
				left: '0'
			});
			return false;
		});
		$('.h-menu__link-back').on('click', function() {
			$('.header__h-menu').animate({
				left: '280px'
			});
			return false;
		});
		$('.h-nav__item').on('click' ,function() {
			$('.h-nav__item').removeClass('active');
			var carrentnav = $(this).children('.h-nav__link').attr('name');
			if(carrentnav == "togwomen") {
				$('.h-subnav').hide();
				$('.h-nav__trang').stop(false, true).animate({
					left: "42px"
				}, 300);
				$(this).addClass('active');
				$('.h-subnav-1').show();
				return false;
			}
			if(carrentnav == "togmen") {
				$('.h-subnav').hide();
				$('.h-nav__trang').stop(false, true).animate({
					left: "135px"
				}, 300);
				$(this).addClass('active');
				$('.h-subnav-2').show();
				return false;
			}
			if(carrentnav == "togkids") {
				$('.h-subnav').hide();
				$('.h-nav__trang').stop(false, true).animate({
					left: "230px"
				}, 300);
				$(this).addClass('active');
				$('.h-subnav-3').show();
				return false;
			}
		});
	}
});