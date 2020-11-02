$('.dropdown').on('click', function(e) {
    var target = $(e.target);
    var dropdown = target.closest('.dropdown');
    return !dropdown.hasClass('open') || !target.hasClass('dropdown-menu__search__input');
});

/* More button toggle */
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
/* Show/Hide form on click */
$(document).ready(function() {
    $("#formButton").click(function() {
      $("#form1").toggle();
    });
  });

/* Slick carousel banner */
$(document).ready(function(){
  $('.banner-slide').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnDotsHover:true,
      autoplaySpeed:300,
      dots: true,
      arrows: false,
      infinite: true
  });
});

/* Slick carousel background banner */
// $(document).ready(function(){
//   $('.background-slide').slick({
//       mobileFirst: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       pauseOnDotsHover:true,
//       autoplaySpeed:300,
//       dots: true,
//       arrows: false,
//       infinite: true
//   });
// });
$(document).ready(function(){
  $('.home-courses-events').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnDotsHover:true,
      autoplaySpeed:1200,
      dots: true,
      arrows: false,
      infinite: true
  });
});

/* Slick carousel book slider */ 
$(document).ready(function(){
  $('.book__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.pause').on('click', function() {
    $('.book__slider')
        .slick('slickPause')
  });
});

/* Emotion slider */ 
$(document).ready(function(){
  $('.emotion__slide').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      pauseOnDotsHover:true,
      autoplaySpeed:300,
      dots: true,
      arrows: false,
      infinite: true
  });
});
