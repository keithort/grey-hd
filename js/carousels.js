(function(){

  // Carousel configurations

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
  $('.recipes-carousel').owlCarousel({
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
