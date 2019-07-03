

$(document).ready(() => {


    $('div.hide').hide();
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




$(window).on("resize", function (e) {
  checkScreenSize();
});

checkScreenSize();

function checkScreenSize(){
  var newWindowWidth = $(window).width();
  if (newWindowWidth < 760) {
    $('.main-nav').addClass('mobile-nav');
    $('.mobile-nav').slideToggle(400);
  }
  else
  {
    $('.main-nav').removeClass('mobile-nav');
  }
}



/* $('nav.navbar').on('click', () => {
  $('.mobile-nav').slideToggle(400);
}); */

  // $('.featurette').on('mouseenter', () => {
  // $(this).next('.col-md-7').removeClass(".hide")
  // }).on('mouseleave', () => {
  //   $(this).next('.col-md-7').addClass(".hide")
  // })
  
  



// $('.featurette').on('mouseenter', () => {
//   $('div.col-md-7').show();
// })

// $('.featurette').on('mouseover', event => {
//   $(event.currentTarget).addClass('feature-color').fadeIn(100)
//   }).on('mouseleave', event => {
//     $(event.currentTarget).removeClass('feature-color').fadeOut
// })



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
