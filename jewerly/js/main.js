$(document).ready(function() {
	
	try {
	  $('.mainslider__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
       autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
       /* dotsClass: 'mainslider__dots_slick',*/
    });
	} catch(err) {
	
	}
	try {	
	  $('.products-slider-popular').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
      /* autoplay: true,
        autoplaySpeed: 3000,*/
        arrows: false,
        dots: true,
       /* dotsClass: 'mainslider__dots_slick',*/
	   responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,

		  }
		}]
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
	
		
	$(".products-slider__arrow_right").click(function(e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickNext"); // Switched to '.slick-slider'
	});
	
		$(".products-slider__arrow_left").click(function(e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickPrev"); // Switched to '.slick-slider'
	});


	
	
	$('.filter__showmore span').on('click', function() {
		$(this).parent().parent().toggleClass('fullheight');
		if ($(this).parent().parent().hasClass('fullheight')) {
			$(this).html('Свернуть');
		}
		else {
			$(this).html('Показать все');
		}
	});
	
   $("input[type=tel]").mask("+7 (999) 999-99-99");

	
	$('.filter__title').on('click', function() {
		/*$(this).siblings('.filter__content').toggle();*/
		$(this).parent().toggleClass('filter__item_padding');
		/*$(this).toggleClass('change-angle');*/

	});
	
	$('.accordion__title').on('click', function() {
		$('.accordion__content').not($(this).next()).slideUp();
		$('.accordion__title').not(this).removeClass('active')
		$(this).next().slideToggle();
		$(this).toggleClass('active');
	});
	
	/*$('#place').change(function(){
	  $('div.checkout__place').slideUp();
	  $('#div_place_'+$(this).index()).slideDown();
	});*/
	
	$('input[name="shipping"]').click(function(){
		$('.checkout__address').removeClass('visible');
		$(this).parent().parent().find('.checkout__address').toggleClass('visible');		
	});
	
	$('select[name="place"]').change(function(){
		$('.checkout__place').removeClass('visible');
		$('#div_place_'+$(this).prop('selectedIndex')).addClass('visible');			
	});
	
	$('.productimg__preview').click(function(){
		$('.productimg__preview').removeClass('active');
		$(this).addClass('active');
	});
	
	
	$('.addbuttons__share').click(function(){
		$(this).siblings('.share-tooltip').toggle();
	});
	
	$('input#maxCost').on('focusin', function(){
		$(this).val("");
	});
	
	$('input#minCost').on('focusin', function(){
		$(this).val("");
	});
	
	$('.mainmenu > ul > li a').hover(function(){
		$(this).parent().find('.mainmenu__level2_relative > ul > li:first-child .mainmenu__level3').css('display','block');
	},
	function(){
		$(this).parent().find('.mainmenu__level2_relative > ul > li:first-child .mainmenu__level3').css('display','none');
	}
	
	);
	
	$('.collections__item').hover(function(){
		$(this).find('img').addClass('scale');
	},
	function(){
		$(this).find('img').removeClass('scale');
	}
	
	);

 try {
	 $(".productimg__img_desktop img").imagezoomsl({
         zoomrange: [1, 6],
         zoomstart: 2,
         innerzoom: true,
         magnifierborder: "none"		 
      }); 
	 }
	 catch (err) {


	}
	});

(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});


$('.productimg__preview img').on('click',function(){
	$('.productimg__img img').attr('src', $(this).attr('src'));
	$('.magnifier img').attr('src', $(this).attr('src'));
	$('.productimg__img a').attr('href', $(this).attr('src'))
}) 



})(jQuery);


/* мобильное меню */


// переменная для текущего размера экрана, по умолчанию - широкий
var windowState = 'large';

// проверка ширины экрана и адаптация меню
$(document).ready(function() {
    var sw = document.body.clientWidth;
    if (sw < 768) {
       smMenu();
    } 
	else {
	   lgMenu();
	}
});

// учитываем возможное изменение размера экрана (например, если перевернуть телефон в горизонтальный режим)
$(window).resize(function() {
	var sw = document.body.clientWidth;
    if (sw < 768 && windowState != 'small') {
       smMenu();
    }
  
    if (sw > 767 && windowState != 'large') {
       lgMenu();
	   
	  
    } 
});

function smMenu() {
	$('.mainmenu > ul > li > a').after('<i class="fa fa-angle-down" aria-hidden="true"></i>');
	$('.mainmenu__level2_relative > ul > li > a').after('<i class="fa fa-angle-down" aria-hidden="true"></i>');

	
	
	$('#mobile-menu').off('click');	
	$('#mobile-filter').off('click');
	$('.expand').removeClass('expand');
	$('#mobile-menu').remove();
	/*$('#mobile-filter').remove();*/
	
    $('#header .buttons_right').before('<button id="mobile-menu"><img src="/images/bars.png">Меню</button>');
	/*$('#header').after('<button id="mobile-filter"><img src="/images/filter.png"> Подобрать изделие</button>');*/
   
	$('#mobile-menu').click(function() {
		//развернуть меню
		$('nav.mainmenu').toggleClass('expand');
	});
	$('#mobile-filter').click(function() {
		//развернуть меню
		$('.filter').toggleClass('expand');
	});
	
	
	
	
	$('.mainmenu > ul > li .fa').click(function(e) {
		if ($(window).width() < 768) {			
			e.preventDefault();		
			$(this).parent().find('.mainmenu__level2').stop(true, true).slideToggle(250).end().siblings().find('.mainmenu__level2').slideUp(250);
		}
	});
	
	$('.mainmenu__level2_relative > ul > li .fa').click(function(e) {
		if ($(window).width() < 768) {			
			e.preventDefault();		
			$(this).parent().find('.mainmenu__level3').stop(true, true).slideToggle(250).end().siblings().find('.mainmenu__level3').slideUp(250);
		}
	});
	
	windowState = 'small';
}



//для больших экранов
function lgMenu() {
	
	$('#mobile-menu').off('click');	
	$('.expand').removeClass('expand');
	$('#mobile-menu').remove();
	$('#mobile-filter').off('click');	
	/*$('#mobile-filter').remove();*/
    windowState = 'large';
}

/* END мобильное меню */



jQuery(document).ready(function(){

try {
/* слайдер цен */

jQuery("#slider").slider({
	min: 590,
	max: 16900,
	values: [590,16900],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});

	
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 16900) { value2 = 16900; jQuery("input#maxCost").val(16900)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});



// фильтрация ввода в поля
	jQuery('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});
} catch (err) {
	
};

});





