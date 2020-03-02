$(document).ready(function() {

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
    })

});