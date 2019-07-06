
/* 
$(function() {
  let menuVisible = false;
  $('nav.nav-bar').on('click', () => {
    if (menuVisible) {
      $('nav.nav-bar').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('nav.nav-bar').css({'display':'block'});
    menuVisible = true;
  });
  $('nav.nav-bar').on('click', () => {
    $(this).css({'display':'none'});
    menuVisible = false;
  });
}); */


$(document).ready(() => {


    $('div.hide').hide();
    $('div.hide0').hide();
    $('div.hide1').hide();
    $('div.hide2').hide();

  
  
  
    $('.nav-links').on('mouseenter', event => {
    $(event.currentTarget).addClass('active-nav')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('active-nav')
  })

// $('.logo').on('click', () => {
 
// })




$('.icon-container').on('mouseenter', () => {
  $('.icon-container').animate({
    paddingLeft: '20rem'
   })

   $('.hide').show("fold", 2000);
   $('div.hide').removeClass('hide');
   
 });
 /* .on('mouseleave', () => {
   $('.hide').fadeOut('slow')
 }) */

 $('.icon-containerzero').on('mouseenter', () => {
  $('.icon-containerzero').animate({
    paddingLeft: '20rem'
   })

   $('.hide0').show("fold", 2000);
   $('div.hide0').removeClass('hide0');
   
 });


 $('.icon-containerone').on('mouseenter', () => {
  $('.icon-containerone').animate({
    paddingLeft: '20rem'
   })

   $('.hide1').show("fold", 2000);
   $('div.hide1').removeClass('hide1');

   
 });
 /* .on('mouseleave', () => {
  $('.hide1').fadeOut('slow')
}) */

$('.icon-containertwo').on('mouseenter', () => {
  $('.icon-containertwo').animate({
    paddingLeft: '20rem'
   })
   $('.hide2').show("fold", 2000);
   $('div.hide2').removeClass('hide2');


 });
 /* .on('mouseleave', () => {
  $('.hide2').fadeOut('slow')
}) */

/* Mobile Version JQuery */

/* $(window).on("resize", function (e) {
  checkScreenSize();
});

checkScreenSize();

function checkScreenSize(){
  var newWindowWidth = $(window).width();
  if (newWindowWidth < 700) {
    $('.main-nav').addClass('mobile-nav');

    $('nav.nav-bar').on('click', () => {
      $('.mobile-nav').slideToggle(400);

    })

  }
  /* {
    $('.main-nav').removeClass('mobile-nav');
  } 
} */

});

/* Javascript */

/* document.addEventListener('DOMContentLoaded', function() {

  let menuLoaded = document.getElementById(jsMenu);
  menuLoaded.style.display === 'none';
 */
  if (window.innerWidth <= 700) {

    function mobileNav(jsMenu) {
      
      let mobileMenu = document.getElementById(jsMenu);


      if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "none";
        $('.mobile-nav').slideDown(400);
    
      } else {
        mobileMenu.style.display = "block";
        $('.mobile-nav').slideUp(400);
    
      }
    };
    
    };

/* }, false);
 */


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
