(function(){
  /* 
   * All products
   */
  // Filter configuration
  $('.all_products nav.products header').on('click', function(el) {
    // Remove .active and exit when clicking already active dropdown
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().removeClass('active');
      return;
    }
    // Only 1 dropdown menu is to show at a time
    $(this).closest('.wrapper').find('ul').each(function(index) {
      $(this).removeClass('active');
    });
    // Position and size the dropdown correctly
    // We have to add 2px of width the the nav for tablets and up so the borders line up
    var navWidth = $(window).width() < 750 ? $(this).closest('nav').width() + 'px' : $(this).closest('nav').width() + 2 + 'px'
    $(this).addClass('active');
    $(this).next().addClass('active').css({
      'top'   : $(this).height() + 'px',
      'width' : $(this).closest('nav').width() + 2 + 'px'
    });
  });
  // Toggle active search criteria from dropdowns
  $('.all_products .products a').on('click', function(el) {
    el.preventDefault();
    // Remove .active when user selects active filter
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      return;
    }
    // Only 1 product filter can be active at a time
    $(this).closest('nav').find('a').each(function(index) {
      $(this).removeClass('active');
    });
    $(this).toggleClass('active');
  });
  // Toggle visibility of Filter button. Filter button is on mobile view only.
  $('.all_products .filters button').on('click', function() {
    $(this).siblings().toggle();
  })
  // Toggle classes on size filters
  $('.all_products .sizes a').on('click', function(el) {
    el.preventDefault();
    // Remove .active and exit when clicking already active size
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      return;
    }
    // Only 1 dropdown menu is to show at a time
    $(this).siblings().each(function(index) {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });


  /* 
   * Product details
   */
  // Dynamically set size of overlay ensuring the height is identical
  var infoHeight = $('main.product_details .hero').height() > $('main.product_details .dek').height() ? $('.product_details .hero').height() : $('.product_details .dek').height() || 0,
      infoWidth = $(window).width();
  // Appending dynamic style rules to an empty style block on page on page load
  $('.overlay').append('article.ingredients { left: -' + infoWidth + 'px; width: ' + infoWidth + 'px; }');
  // Show or hide detail overlay based on user interaction
  $('a.nutritional-table, .product_details article.ingredients a.close').on('click', function(el){
    el.preventDefault();
    $('.overlay').append('article.ingredients { height: ' + infoHeight + 'px; }');
    $('.product_details article.ingredients').toggleClass('slide');
  });


  /* 
   * Contact Us
   */
  // Show or hide additional form elements based on user selection
  $('.about_contact a.expand').on('click', function(el) {
    el.preventDefault();
    $(this).next().slideToggle('.1s');
  });
}(jQuery))
