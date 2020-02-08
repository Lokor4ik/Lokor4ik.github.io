$(document).ready(function() {
    $('.slider__items').slick({
        slidesToShow: 3,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 647,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    nextArrow: false,
                    prevArrow: false
                }
            }
        ]
    });
});
var wrapperMenu = document.querySelector('.wrapper-menu'); //BURGER

wrapperMenu.addEventListener('click', function() {
    wrapperMenu.classList.toggle('open');
})
$('.wrapper-menu').on('click',
    function() {
        $('.menu ul').slideToggle();
    });

$('#search__btn').on('click',
    function() {
        var width_client = document.body.clientWidth;
        if (width_client <= 585)
            $('.menu ul').slideToggle();
    });