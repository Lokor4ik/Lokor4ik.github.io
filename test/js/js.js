$(document).ready(function() {
    /* 
        var wrapperMenu = document.querySelector('.burger'); //BURGER
        var checkClick = false;
        wrapperMenu.addEventListener('click', function() {
            wrapperMenu.classList.toggle('open');


            if (!checkClick) {
                checkClick = true;
                $(".menu__burger-inner").css("display", "block");

                $(".menu__burger-inner").stop();
                $(".menu__burger-inner").animate({ opacity: 1, left: 0 }, 200);
            } else
            if (checkClick) {
                checkClick = false;
                $(".menu__burger-inner").stop();
                $(".menu__burger-inner").animate({ opacity: 0, left: -274 }, 200, function() {
                    $(".menu__burger-inner").css("display", "none");
                });
            }
        }) */
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });


    $('.participation__item--one').on('click',
        function() {
            $('.participation__item--one').css({
                "background-color": "#e32e4a",
                "color": "#fff"
            });
            $('.participation__item--one span').css({

                "color": "rgb(212, 212, 212)"
            });


            $('.participation__item--two').css({
                "background-color": "#fff",
                "color": "#000"
            });
            $('.participation__item--three').css({
                "background-color": "#fff",
                "color": "#000"
            });

            $('.participation__item--two span').css({

                "color": "gray"
            });
            $('.participation__item--three span').css({

                "color": "gray"
            });
        });

    $('.participation__item--two').on('click',
        function() {
            $('.participation__item--two').css({
                "background-color": "#e32e4a",
                "color": "#fff"
            });
            $('.participation__item--two span').css({

                "color": "rgb(212, 212, 212)"
            });


            $('.participation__item--one').css({
                "background-color": "#fff",
                "color": "#000"
            });

            $('.participation__item--three').css({
                "background-color": "#fff",
                "color": "#000"
            });



            $('.participation__item--one span').css({

                "color": "gray"
            });
            $('.participation__item--three span').css({

                "color": "gray"
            });
        });

    $('.participation__item--three').on('click',
        function() {
            $('.participation__item--three').css({
                "background-color": "#e32e4a",
                "color": "#fff"
            });
            $('.participation__item--three span').css({

                "color": "rgb(212, 212, 212)"
            });


            $('.participation__item--two').css({
                "background-color": "#fff",
                "color": "#000"
            });
            $('.participation__item--one').css({
                "background-color": "#fff",
                "color": "#000"
            });



            $('.participation__item--two span').css({

                "color": "gray"
            });
            $('.participation__item--one span').css({

                "color": "gray"
            });
        });


    var wrapperMenu = document.querySelector('.burger'); //BURGER

    wrapperMenu.addEventListener('click', function() {
        wrapperMenu.classList.toggle('open');
    })


    $('.burger').on('click',
        function() {
            $('.menu ul').slideToggle();
        });


});