$(document).ready(function() {
	
	  $('.mainslider__slider').each(function() {
		  $(this).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      /*  autoplay: true,
        autoplaySpeed: 3000, */
        arrows: true,
        dots: true,
		nextArrow: $(this).parent().parent().find('.mainslider__right'),
		prevArrow: $(this).parent().parent().find('.mainslider__left'),
		responsive: [
			{
			  breakpoint: 999,
			  settings: {
				 dots: false,
			  }
			},
			
			]
			});
  });

	try {	
	  $('.productslider__slider').each(function() {
		  $(this).slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
		  /* autoplay: true,
			autoplaySpeed: 3000,*/
			arrows: true,
			dots: false,
			nextArrow: $(this).parent().find('.productslider__right'),
			prevArrow: $(this).parent().find('.productslider__left'),
		   /* dotsClass: 'mainslider__dots_slick',*/
		   responsive: [
			{
			  breakpoint: 999,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			}
			]
			});
	  });
	} catch(err) {
	}
	
	try {	
	  $('.reviews__slider').each(function() {
		  $(this).slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
		  /* autoplay: true,
			autoplaySpeed: 3000,*/
			arrows: false,
			dots: true,
		
		   /* dotsClass: 'mainslider__dots_slick',*/
		   responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			}
			
			]
			});
	  });
	} catch(err) {
	}
	
	
	
	try {
	 $('.products-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
      /* autoplay: true,
        autoplaySpeed: 3000,*/
        arrows: false,
	/*nextArrow: '.products-slider__arrow_right',
		prevArrow: '.products-slider__arrow_left',*/
        dots: false,
       /* dotsClass: 'mainslider__dots_slick',*/
	   responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		  }
		}]
    });
	} catch(err) {
	}
	
	$('.search__button').click(function(e) {
		e.preventDefault();
		$('.search').toggleClass('search_open');
	});
	$('.closesearch').click(function(e) {
		e.preventDefault();
		$('.search').toggleClass('search_open');
	});
	
   $("input[type=tel]").mask("+7 (999) 999-99-99");
	
	
	$('.topmenubutton').click(function (event) {
		$('.header__topmenu').slideToggle();
	});
	
	$('.topmenubutton__close').click(function (event) {
		$('.header__topmenu').slideToggle();
	});
	$('.mainmenu__catalog > a').click(function (event) {
		event.preventDefault();
		$('.mainmenu__submenu').slideToggle();
	});

	$('.submenu__title').click(function (event) {
		$(this).siblings('.submenu__list').slideToggle();
		$(this).toggleClass('active');
	});
	
	$('.filter__header').on('click', function() {
		$(this).parent().toggleClass('filter__item_open');
		$(this).siblings('.filter__form').slideToggle();
	});
	
	$('.filtertoggle').on('click', function() {
		$('.filter').slideToggle();
	});
	
	$('.filter__close').on('click', function() {
		$('.filter').slideToggle();
	});
	
	
	
	$('.showall').on('click', function() {
		$(this).hide();
		$(this).siblings('.productslist__items_hidden').toggleClass('productslist__items_hidden');
		$(this).parent().find('.productslist__item_hidden-mobile').toggleClass('productslist__item_hidden-mobile');
	

	});
	
	
	
	
	function incrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
	  if (!isNaN(currentVal)) {
		parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
	  } else {
		parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}
	function decrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
	  if (!isNaN(currentVal) && currentVal > 1) {
		parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
	  } else {
		parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}
	$('.quantity').on('click', '.quantity-plus', function(e) {
	  incrementValue(e);
	});
	$('.quantity').on('click', '.quantity-minus', function(e) {
	  decrementValue(e);
	});
	
});		
		
		