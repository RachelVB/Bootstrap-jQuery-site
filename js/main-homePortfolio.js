
$(document).ready(() => {

  $('.nav-links').on('mouseenter', event => {
    $(event.currentTarget).addClass('active-nav')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('active-nav')
  })

  $('.card.mb-4').on('mouseenter', event => {
    $(event.currentTarget).animate({
      bottom: "+=50",
      opacity: 3
  }, 300)
    }).on('mouseleave', event => {
    $(event.currentTarget).animate({
      bottom: "-=50",
      opacity: 0.30
  }, 300)

    })

    $('nav.navbar').on('click', () => {
      $('.mobile-nav').slideToggle(400);
    });

    // $('.featurette').on('mouseover', event => {
//   $(event.currentTarget).addClass('feature-color').fadeIn(100)
//   }).on('mouseleave', event => {
//     $(event.currentTarget).removeClass('feature-color').fadeOut
// })
  

})