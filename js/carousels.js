(function(){

  // Carousel configurations
  $('.instruction-carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: [,]
  });
  $('.recipes-carousel').owlCarousel({
    dots: false,
    lazyLoad: true,
    loop: true,
    navText: [,],
    responsive: {
     0: {
      items: 1,
      nav: false
     },
     750: {
      items: 3,
      nav: true,
      slideBy: 3
     }
    }
  });
  
}(jQuery))
