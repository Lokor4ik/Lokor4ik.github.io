jQuery(document).ready(function($) {

    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });

    $('.video__btn').on('click',
        function() {
            $('.popup-youtube').trigger('click');
        });

    document.querySelector('#video__gallery').addEventListener('click', function(e) { // Вешаем обработчик клика на UL, не LI
        var id = e.target.id; // Получили ID, т.к. в e.target содержится элемент по которому кликнули

        if (id == "first__video") {
            document.querySelector('.video__content-title span:first-child').innerHTML = "Movie #1";
            document.getElementById("img_for_js").src = "img/video_blue.png";
            document.getElementById("fake_link").href = "https://www.youtube.com/watch?v=U0fSWxRCOXQ";

            document.getElementById("first__video").style.backgroundColor = 'rgba(255, 255, 255, 0.349)';

            document.getElementById("second__video").style.backgroundColor = '#41484e';
            document.getElementById("third__video").style.backgroundColor = '#41484e';
            document.getElementById("four__video").style.backgroundColor = '#41484e';
        } else
        if (id == "second__video") {
            document.querySelector('.video__content-title span:first-child').innerHTML = "Movie #2";
            document.getElementById("img_for_js").src = "img/video_green.png";
            document.getElementById("fake_link").href = "https://www.youtube.com/watch?v=DwUPmggkK50";

            document.getElementById("second__video").style.backgroundColor = 'rgba(255, 255, 255, 0.349)';

            document.getElementById("first__video").style.backgroundColor = '#41484e';
            document.getElementById("third__video").style.backgroundColor = '#41484e';
            document.getElementById("four__video").style.backgroundColor = '#41484e';
        } else
        if (id == "third__video") {
            document.querySelector('.video__content-title span:first-child').innerHTML = "Movie #3";
            document.getElementById("img_for_js").src = "img/video_red.png";
            document.getElementById("fake_link").href = "https://www.youtube.com/watch?v=EL_Zu5V8TGg";

            document.getElementById("third__video").style.backgroundColor = 'rgba(255, 255, 255, 0.349)';

            document.getElementById("second__video").style.backgroundColor = '#41484e';
            document.getElementById("first__video").style.backgroundColor = '#41484e';
            document.getElementById("four__video").style.backgroundColor = '#41484e';
        } else
        if (id == "four__video") {
            document.querySelector('.video__content-title span:first-child').innerHTML = "Movie #4";
            document.getElementById("img_for_js").src = "img/video_violet.png";
            document.getElementById("fake_link").href = "https://www.youtube.com/watch?v=4LuQF719w14";

            document.getElementById("four__video").style.backgroundColor = 'rgba(255, 255, 255, 0.349)';

            document.getElementById("second__video").style.backgroundColor = '#41484e';
            document.getElementById("third__video").style.backgroundColor = '#41484e';
            document.getElementById("first__video").style.backgroundColor = '#41484e';

        }
    });



});

var check_scroll = true;
$(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 2670 && check_scroll) {
        //сработает когда пользователь доскроллит к элементу с классом .elem
        check_scroll = false;
        count__number();
    }
});

function count__number() {
    $('#lines_8m').animateNumber({ number: 8 });
    $('#lines_91m').animateNumber({ number: 91 });
    $('#lines_125k').animateNumber({ number: 125 });
    $('#lines_954k').animateNumber({ number: 954 });
}

$('.testimonials__slider-inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});

function valid(form) {
    var fail = false;
    var eMail = form.user_email.value;

    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;


    if (eMail == "")
        fail = "Вы не ввели почту!";


    if (fail)
        alert(fail);
    else {
        alert("Nice! Message was sent.")
    }
};


var wrapperMenu = document.querySelector('.wrapper-menu'); //BURGER

wrapperMenu.addEventListener('click', function() {
    wrapperMenu.classList.toggle('open');
})
$('.wrapper-menu').on('click',
    function() {
        $('.menu ul').slideToggle();
    });