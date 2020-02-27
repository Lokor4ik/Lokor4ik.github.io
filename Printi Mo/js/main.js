$(document).ready(function() {
    var checkedImgSearch = false;

    function moveSearch() {
        if (!checkedImgSearch) {
            $("#search__img").stop();
            checkedImgSearch = true;

            $("#search__img").animate({
                right: '7.5%',
            }, 400, function() {});

            setTimeout(() => $("#search__input").focus(), 100);
        }
    }

    function moveBackSearch() {
        $("#search__img").stop();
        checkedImgSearch = false;

        $("#search__img").animate({
            right: '50%',
        }, 200, function() {});
    }

    $("#search__btn").mouseenter(function() {
        moveSearch();

    })

    $("#search__btn").click(function() {
        moveSearch();
    })

    $("html").click(function(event) {
        var clickId = event.target.id;

        if (clickId != "search__btn" && clickId != "search__img" && clickId != "search__input") {
            moveBackSearch();
        }
    })

    $("#search__btn").mouseleave(function() {
        moveBackSearch();
    })

    var wrapperMenu = document.querySelector('.burger'); //BURGER
    var checkClick = false;
    wrapperMenu.addEventListener('click', function() {
        wrapperMenu.classList.toggle('open');

        if ($(".burger__middle").css("background-color") != "rgb(207, 207, 207)" && !checkClick) {
            checkClick = true;
            $(".burger__middle").addClass('white');
            $(".burger__middle").css("background-color", "rgb(207, 207, 207)");


            $(".menu__burger-inner").css("display", "block");

            $(".menu__burger-inner").stop();
            $(".menu__burger-inner").animate({ opacity: 1 }, 200);

            $(".menu__burger").stop();
            $(".menu__burger").animate({ left: 0 }, 400);


            $(".warp").css("overflow", "hidden");
            $(".warp").addClass("fixed");
        } else
        if (checkClick) {
            checkClick = false;
            $(".burger__middle").removeClass('white');
            $(".burger__middle").css("background-color", "rgb(97, 0, 0)");


            $(".menu__burger").stop();
            $(".menu__burger").animate({ left: -274 }, 400, function() {
                $(".menu__burger-inner").css("display", "none");
            });


            $(".menu__burger-inner").stop();
            $(".menu__burger-inner").animate({ opacity: 0 }, 400);


            $(".warp").css("overflow", "visible");
            $(".warp").removeClass("fixed");
        }
    })

    $(".ordering__size").click(function() {
        $(".ordering__size").removeClass('ordering__layot');
        this.classList.toggle('ordering__layot');
    })

    $(".ordering__col").click(function() {
        $(".ordering__col").removeClass('ordering__col-lauot');
        this.classList.toggle('ordering__col-lauot');
    })

    $(".card__ordering").click(function() {
        $(".card__ordering").removeClass('card__layot');
        this.classList.toggle('card__layot');
    })

    $(".choice__table-element").click(function() {
        $(".choice__table-element").removeClass('choice__element-layot');
        this.classList.toggle('choice__element-layot');
    })

    $(".choice__var-element").click(function() {
        $(".choice__var-element").removeClass('choice__var-layot');
        this.classList.toggle('choice__var-layot');
    })

});