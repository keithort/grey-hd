(function(){
  // All products
  $('.all_products nav.products header').on('click', function(el) {
    if ($(this).next().hasClass('active')) {
      $(this).next().removeClass('active');
      return;
    }
    $(this).closest('.wrapper').find('ul').each(function(index) {
      $(this).removeClass('active');
    });
    $(this).next().addClass('active').css({
      'top': $(this).height() + 'px',
      'width' : $(this).closest('nav').width() + 2 + 'px'
    });
  });
  $('.all_products .filters button').on('click', function() {
    $(this).siblings().toggle();
  })


  // Product Details
  var infoHeight = $('main.product_details .hero').height() > $('main.product_details .dek').height() ? $('.product_details .hero').height() : $('.product_details .dek').height() || 0,
      infoWidth = $(window).width();
  $('.overlay').append('article.ingredients { left: -' + infoWidth + 'px; width: ' + infoWidth + 'px; }');
  $('a.nutritional-table, .product_details article.ingredients a.close').on('click', function(el){
    el.preventDefault();
    $('.overlay').append('article.ingredients { height: ' + infoHeight + 'px; }');
    $('.product_details article.ingredients').toggleClass('slide');
  });

  // Contact 
  $('.about_contact a.expand').on('click', function(el) {
    el.preventDefault();
    $(this).next().slideToggle('.1s');
  });
}(jQuery))
