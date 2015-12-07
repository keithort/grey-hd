(function(){

  // Product Details
  var infoHeight = $('.hero').height() > $('.dek').height() ? $('.hero').height() : $('.dek').height();
  $('.overlay').append('article.ingredients { height: ' + infoHeight + 'px; }');
  $('a.nutritional-table, a.close').on('click', function(el){
    el.preventDefault();
    $('header.hero, article.dek, article.ingredients').toggle();
  });

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
