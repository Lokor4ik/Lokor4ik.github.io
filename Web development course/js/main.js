$(function() {

    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 5,
        slidesToScroll: 1,
        /* 
                autoplay: true,
                autoplaySpeed: 2000, */
        swipeToSlide: true,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 925,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    var wrapperMenu = document.querySelector('.wrapper-menu'); //BURGER

    wrapperMenu.addEventListener('click', function() {
        wrapperMenu.classList.toggle('open');
    })
    $('.wrapper-menu').on('click',
        function() {
            $('.menu ul').slideToggle();
        });
});

var check_scroll = true;

$(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 1300 && check_scroll) {
        //сработает когда пользователь доскроллит к элементу с классом .elem
        check_scroll = false;
        Volvoka();
    }
});

function Volvoka() {
    var check = true;
    var check_width = false;
    var counter = 0;

    var counter_box_shadow = 0;

    var elements = document.querySelectorAll('.sliders');
    var elements_2 = document.querySelectorAll('.sliders_2');
    var common_elements = document.querySelectorAll('.box_title');
    var buffer_elements = null;
    buffer_elements = elements;
    setInterval(function() {
        for (var i = 0; i < buffer_elements.length; ++i) {
            buffer_elements[i].style["boxShadow"] = "1px 1px 10px rgba(90, 89, 89, 0.9)";
            buffer_elements[i].style.transform = "translate(0px, 0px)";
        }
        //Если разрешение экрана меньше 857 и счетчик последний, то начинаем заново  процесс увеличение тени подряд по вертикали, или если разрешение экрана меньше 857 и счетчик нулевой, тоесть первы запуск, то начинаем процесс увеличение тени подряд по вертикали
        if ((window.screen.width <= 857 && (counter > buffer_elements.length - 1)) || (window.screen.width <= 857 && counter == 0)) {
            buffer_elements = common_elements;
            counter = 0;
            check_width = false;
        } else //иначе, начинаем процесс увеличение тени подряд по горизонтали
        if ((window.screen.width > 857 && (counter > buffer_elements.length - 1)) || (window.screen.width > 857 && counter == 0)) {
            check_width = true;
        }

        if (check_width) {
            if ((counter > buffer_elements.length - 1) && check) { //для блоков с навыками
                counter = 0;
                buffer_elements = elements_2
                check = false;
            } else
            if ((counter > buffer_elements.length - 1) && !check) {
                counter = 0;
                check = true;
                buffer_elements = elements;
            }
        }
        if (check_width) {

            if (counter_box_shadow == 0) //для того, что бы тень на выдвигаающемся блоке отображалась соответственному цвету картинки
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #bb6737, 2px 2px #bb6737, 3px 3px #bb6737, 4px 4px #bb6737, 5px 5px #bb6737, 6px 6px #bb6737, 7px 7px #bb6737, 8px 8px #bb6737, 9px 9px #bb6737";
            else
            if (counter_box_shadow == 1)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #2542a9, 2px 2px #2542a9, 3px 3px #2542a9, 4px 4px #2542a9, 5px 5px #2542a9, 6px 6px #2542a9, 7px 7px #2542a9, 8px 8px #2542a9, 9px 9px #2542a9";
            else
            if (counter_box_shadow == 2)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #146a91, 2px 2px #146a91, 3px 3px #146a91, 4px 4px #146a91, 5px 5px #146a91, 6px 6px #146a91, 7px 7px #146a91, 8px 8px #146a91, 9px 9px #146a91";
            else
            if (counter_box_shadow == 3)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #9c9342, 2px 2px #9c9342, 3px 3px #9c9342, 4px 4px #9c9342, 5px 5px #9c9342, 6px 6px #9c9342, 7px 7px #9c9342, 8px 8px #9c9342, 9px 9px #9c9342";
            else
            if (counter_box_shadow == 4)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #902624, 2px 2px #902624, 3px 3px #902624, 4px 4px #902624, 5px 5px #902624, 6px 6px #902624, 7px 7px #902624, 8px 8px #902624, 9px 9px #902624";
            else
            if (counter_box_shadow == 5) {
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #258415, 2px 2px #258415, 3px 3px #258415, 4px 4px #258415, 5px 5px #258415, 6px 6px #bb6737, 7px 7px #258415, 8px 8px #258415, 9px 9px #258415";
                counter_box_shadow = -1;
            }
        } else {
            if (counter_box_shadow == 0)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #bb6737, 2px 2px #bb6737, 3px 3px #bb6737, 4px 4px #bb6737, 5px 5px #bb6737, 6px 6px #bb6737, 7px 7px #bb6737, 8px 8px #bb6737, 9px 9px #bb6737";
            else
            if (counter_box_shadow == 1)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #9c9342, 2px 2px #9c9342, 3px 3px #9c9342, 4px 4px #9c9342, 5px 5px #9c9342, 6px 6px #9c9342, 7px 7px #9c9342, 8px 8px #9c9342, 9px 9px #9c9342";
            else
            if (counter_box_shadow == 2)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #2542a9, 2px 2px #2542a9, 3px 3px #2542a9, 4px 4px #2542a9, 5px 5px #2542a9, 6px 6px #2542a9, 7px 7px #2542a9, 8px 8px #2542a9, 9px 9px #2542a9";
            else
            if (counter_box_shadow == 3)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #902624, 2px 2px #902624, 3px 3px #902624, 4px 4px #902624, 5px 5px #902624, 6px 6px #902624, 7px 7px #902624, 8px 8px #902624, 9px 9px #902624";
            else
            if (counter_box_shadow == 4)
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #146a91, 2px 2px #146a91, 3px 3px #146a91, 4px 4px #146a91, 5px 5px #146a91, 6px 6px #146a91, 7px 7px #146a91, 8px 8px #146a91, 9px 9px #146a91";
            else
            if (counter_box_shadow == 5) {
                buffer_elements[counter].style["boxShadow"] = "1px 1px 20px 8px #258415, 2px 2px #258415, 3px 3px #258415, 4px 4px #258415, 5px 5px #258415, 6px 6px #bb6737, 7px 7px #258415, 8px 8px #258415, 9px 9px #258415";
                counter_box_shadow = -1;
            }
        }

        buffer_elements[counter].style.transform = "translate(-10px, -10px)";
        counter++;
        ++counter_box_shadow;
    }, 1000);
}