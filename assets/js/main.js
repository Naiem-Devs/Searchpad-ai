(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.body_right').toggleClass('show');   
  }); 
  
 // menu 
 $('.back__btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.side__bar').toggleClass('show');   
  }); 


  // owlCarousel
  $(".Video__card").owlCarousel({
    loop: true,
    margin: 10,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });

  // Generate Video Button Selecting
  var gbBtn = document.querySelectorAll(".gb__link a")

  gbBtn.forEach(gbBtns => {
    gbBtns.addEventListener("click", (e) => {
      e.preventDefault()
      gbBtnremove()
      gbBtns.classList.add("active")
    })
  })

  function gbBtnremove() {
    gbBtn.forEach(gbBtns => {
      gbBtns.classList.remove("active")
    })
  }

  // Audio Plyer Active
  var audioBtn = document.querySelectorAll(".audio__blk")

  audioBtn.forEach(audioBtns => {
    audioBtns.addEventListener("click", (e) => {
      e.preventDefault()
      audioBtnremove()
      audioBtns.classList.add("active")
    })
  })

  function audioBtnremove() {
    audioBtn.forEach(audioBtns => {
      audioBtns.classList.remove("active")
    })
  }


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
