(function(){

  // Product Details
  var infoHeight = $('.hero').height() > $('.dek').height() ? $('.hero').height() : $('.dek').height() || 0;
  $('.overlay').append('article.ingredients { height: ' + infoHeight + 'px; }');
  $('a.nutritional-table, a.close').on('click', function(el){
    el.preventDefault();
    $('header.hero, article.dek, article.ingredients').toggle();
  });
}(jQuery))
