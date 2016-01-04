(function(){
  $('.homepage .hero-carousel').slick({
    arrows: false,
    fade: true,
    mobileFirst: true
  });
  $('.homepage .hero-carousel-controls').slick({
    asNavFor: '.hero-carousel',
    fade: true,
    nextArrow: '<div class="owl-next" style=""></div>',
    prevArrow: '<div class="owl-prev" style=""></div>'
  });

  $('.news-carousel').owlCarousel({
    dots: false,
    lazyLoad: true,
    loop: true,
    navText: [,],
    responsive: {
     0: {
      items: 1,
      nav: false,
      slideBy: 1
     },
     750: {
      items: 2,
      nav: true,
      slideBy: 2
     }
    }
  });
  $('.instruction-carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: [,],
    slideBy: 1
  });
  $('.recipes-carousel, .more-news-carousel').owlCarousel({
    dots: false,
    lazyLoad: true,
    loop: true,
    navText: [,],
    responsive: {
     0: {
      items: 1,
      nav: false,
      slideBy: 1
     },
     750: {
      items: 3,
      nav: true,
      slideBy: 3
     }
    }
  });
  
}(jQuery))
