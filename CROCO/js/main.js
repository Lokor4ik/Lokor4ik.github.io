const header = document.getElementById("langs-btns");
const btns = header.getElementsByClassName("header__langs-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let isLoop = true;
const slider = document.getElementsByClassName("swiper-slide");
if (slider.length < 3) {
  isLoop = false;
}
console.log(isLoop);
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  grabCursor: true,
  loop: isLoop,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});