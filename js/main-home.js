

$(document).ready(() => {

  $('.nav-links').on('mouseenter', event => {
    $(event.currentTarget).addClass('active-nav')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('active-nav')
  })

$('.logo').on('click', () => {

  $('.main-nav').toggleClass('mobile-nav');

 
})



  // $(window).on("resize", function (e) {
  //   checkScreenSize();
  
});

// checkScreenSize();


// function checkScreenSize(){
//   let newWindowWidth = $(window).width();
//   if (newWindowWidth < 800) {
//     $('.main-nav').addClass('nav-linkshide');
//   }
// }
// });



/* Iphone size */
// $(window).resize(function () { 

//   if ($('header').width() <= 800 ) {
//     $('.main-logo').removeClass('logo');
//     $('.main-nav').addClass('nav-linkshide');
//   }
  
// });

// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });
