$(document).ready(() => {

  $('.nav-links').on('mouseenter', event => {
    $(event.currentTarget).addClass('active-nav')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('active-nav')
  })

  /* Iphone size */
  $(window).resize(function () { 

    if ($('header').width() <= 500 ) {
      $('nav').remove('.main-nav');
    }
    
  });
  
  
});

// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });
