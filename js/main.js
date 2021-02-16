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
	$('.search__button').click(function(e) {
		e.preventDefault();
		$('.search__full').toggleClass('search__full_open');
		$('.search__button').toggleClass('search__button_open');
	});
   $("input[type=tel]").mask("+7 (999) 999-99-99");
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
	$('.menubutton2').click(function (event) {
		$('.mainmenu').slideToggle();
	});
	$('.menubutton1').click(function (event) {
		$('.topmenu').slideToggle();
	});
	$('.topmenu__close').click(function (event) {
		$('.topmenu').slideToggle();
	});
	$('.mapitem__marker').click(function (event) {
		$(this).parent().find('.mapitem__tooltip').slideToggle();
	});
	$('.mapitem__close').click(function (event) {
		$(this).parent().slideToggle();
	});
	$('.mask-button').on('click', function() {
		$(this).siblings('.dtext').animate({
				height: $('.dtext').get(0).scrollHeight
			}, 600, function(){
				$(this).height('auto');
		});
		$(this).siblings('.dtext').find('.mask-hidden').hide();
		$(this).hide();
	});
	$('form .rating').mousemove(function(e)
	{
		var stars = parseInt((e.pageX-$(this).offset().left)/22)*22+22;
		$(this).children('span').css('width',stars);
	});
	$('form .rating').mouseout(function(e)
	{
		$(this).children('span').css('width',$(this).text()*22);
	});
	$('form .rating').click(function(e)
	{
		var stars = parseInt((e.pageX-$(this).offset().left)/22)+1;
		$('form input[name="rating"]').val(stars);
		$('form .rating span').html(stars);
	});
	
	$("input[type=tel]").mask("+7 (999) 999-99-99");
	
	$('.productimg__preview img').on('click',function(){
		$('.productimg__img img').attr('src', $(this).attr('src'));
		$('.magnifier img').attr('src', $(this).attr('src'));
		$('.productimg__img a').attr('href', $(this).attr('src'))
	}) 
	$('.productimg__preview').click(function(){
		$('.productimg__preview').removeClass('active');
		$(this).addClass('active');
		
		 $(".productimg__img_desktop img").imagezoomsl({
			 zoomrange: [1, 3],
			 zoomstart: 2,
			 innerzoom: true,
			 magnifierborder: "none"		 
		  }); 
	});
	
	
	$(document).ready(function () {
		 $(".productimg__img_desktop img").imagezoomsl({
         zoomrange: [1, 3],
         zoomstart: 2,
         innerzoom: true,
         magnifierborder: "none"		 
      }); 
	});
	
});


$(document).ready( function() {
	var fnames = "";
	var fname = 0;
	function removeFiles() {
			let rem = $(this).parent().attr('id');
			$('.' + rem).remove();
			$(this).parent().remove();
			fnames = $('.filenames').html();
	}
	function updateFiles() {
		fname = fname + 1;
		 $(this).parent().parent().parent().parent().parent().append('<div class="fileupload"><label><div class="fileupload__files"><div class="fileupload__file"><input class="initinputfile" type="file" name="file_upload[]" multiple=""><span class="filebutton">Добавить фото</span></div></div></label></div>');
		/* $('.filename').empty();	 */
		if (this.files[0]) {
			for (var i = 0; i < this.files.length; ++i) {
				var filename = this.files.item(i).name.replace(/.*\\/, ""); 
			/* 	$(this).siblings('.filenames').find('.filenamedef').append('<span class="filename"> ' + filename + ' ' + ' </span>'); */
				fnames += "<span id='fname'" + fname +"> " + "<a href='#'>" + filename + "</a>" + " (" +Math.round(this.files.item(i).size/1024) + " кб)" + "<button><img src='/images/remove2.png'></button></span>";
				$('.filenames').html(fnames);
			}
			/* $(this).siblings('span').empty(); */
			$('.file-error').html("");
			$('.file-upload span').css('text-transform', 'none');
			$('.changefile').css('display', 'block');
		}
		console.log(fnames);
		var newinput = document.querySelectorAll('.fileupload input[type=file]');
		for (var i = 0; i < newinput.length; i++) {
			newinput[i].addEventListener('change', updateFiles);
		}
		var newflnms = document.querySelectorAll('.filenames span button');
		for (var i = 0; i < newflnms.length; i++) {
				newflnms[i].addEventListener('click', removeFiles);
			}
		 $(this).parent().parent().parent().parent().addClass("fname" + fname).hide();
			}
			var input = document.querySelectorAll('.fileupload input[type=file]');
			for (var i = 0; i < input.length; i++) {
					input[i].addEventListener('change', updateFiles);
				}
			var flnms = document.querySelectorAll('.filenames span button');
			for (var i = 0; i < flnms.length; i++) {
					flnms[i].addEventListener('click', removeFiles);
				}
		});
		
		
		
		
		
		