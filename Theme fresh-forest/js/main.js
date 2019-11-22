$('.menu_burger').on('click', function() {
    $(this).toggleClass('menu__active')
    $('.menu__item').toggleClass('menu__item-active')
});