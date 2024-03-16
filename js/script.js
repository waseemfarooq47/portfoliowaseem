$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',
    dotsClass: 'dots'
  })
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
  });
})

// mobile nav

let hamburger= document.querySelector(".hamburger");
let times =document.querySelector('.times')
let mobileNav =document.querySelector(".mobile-nav")

hamburger.addEventListener('click',()=>{
mobileNav.classList.add('open')
})
times.addEventListener('click',()=>{
  mobileNav.classList.remove('open')
})

