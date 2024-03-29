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
            responsive: [{
                    breakpoint: 999,
                    settings: {
                        dots: false,
                    }
                },

            ]
        });
    });



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
                responsive: [{
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
    } catch (err) {}



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
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }]
        });
    } catch (err) {}


    $('.productimg__images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: false,
        fade: true,
        asNavFor: '.productimg__previews',

    });

    $('.productimg__previews').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
        centerMode: false,
        arrows: true,
        nextArrow: '.productimg__arrow_right',
        prevArrow: '.productimg__arrow_left',
        asNavFor: '.productimg__images',
        responsive: [{
                breakpoint: 1343,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]

    });
    $(".productimg__preview").click(function(e) {
        e.preventDefault();
        actIndex = $(this).attr('data-slick-index');
        var slider = $('.productimg__images');
        slider[0].slick.slickGoTo(parseInt(actIndex));
    });


    $('.search__button').click(function(e) {
        e.preventDefault();
        $('.search').toggleClass('search_open');
    });
    $('.closesearch').click(function(e) {
        e.preventDefault();
        $('.search').toggleClass('search_open');
    });

    $("input[type=tel]").mask("+7 (999) 999-99-99");


    $('.topmenubutton').click(function(event) {
        $('.header__topmenu').slideToggle();
    });

    $('.topmenubutton__close').click(function(event) {
        $('.header__topmenu').slideToggle();
    });
    $('.mainmenu__catalog > a').click(function(event) {
        event.preventDefault();
        $('.mainmenu__submenu').slideToggle();
    });

    $('.submenu__title').click(function(event) {
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


    $('form .rating').mousemove(function(e) {
        var stars = parseInt((e.pageX - $(this).offset().left) / 19) * 19 + 19;
        $(this).children('span').css('width', stars);
    });
    $('form .rating').mouseout(function(e) {
        if ($(this).text()) {
            $(this).children('span').css('width', $(this).text() * 19);
        } else {
            $(this).children('span').css('width', '96px');
        }
    });
    $('form .rating').click(function(e) {
        var stars = parseInt((e.pageX - $(this).offset().left) / 19) + 1;
        $('form input[name="rating"]').val(stars);
        $('form .rating span').html(stars);
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

    (function($) {
        $(function() {

            $('.producttabs__header ul').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.producttabs').find('div.producttabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });

        });
    })(jQuery);


    try {
        $('.productslider__slider').each(function() {
            $(this).slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                centerPadding: '0',
                nextArrow: $(this).parent().find('.productslider__right'),
                prevArrow: $(this).parent().find('.productslider__left'),
                dots: false,
                centerPadding: 20,
                responsive: [{
                        breakpoint: 999,
                        settings: {
                            slidesToShow: 3,

                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        });
    } catch (err) {}


});




$(document).ready(function() {
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
                fnames += "<span id='fname'" + fname + "> " + "<a href='#'>" + filename + "</a>" + " (" + Math.round(this.files.item(i).size / 1024) + " кб)" + "<button><img src='/images/remove2.png'></button></span>";
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