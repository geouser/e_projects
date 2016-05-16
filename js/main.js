
// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};



jQuery(document).ready(function($) {

$('section:nth-of-type(1) .wrapper, section:nth-of-type(2) .wrapper').delay(800)
  .queue(function () { 
    $(this).css('opacity', '1'); 
  });

/*---------------------------
                              Shuffle
---------------------------*/

$(function(){

  // Instantiate MixItUp:

  $('#shuffle__container').mixItUp({
    animation: {
      enable: true,
      perspectiveDistance: '1000px',
      animateResizeTargets: !0,
      effects: 'fade scale'
    }
  });

  $('#shuffle__container').on('mixEnd', function(e, state){
    $('.scrollBar').perfectScrollbar('update');
    var elementsAll = state.$targets;
    elementsAll.each(function(index, el) {
      $(this).removeClass('current-left')
    });
    var $elementsShow = state.$show;
    $elementsShow.each(function(index, el) {
      if ((index+1) % 3 === 0){
        $(this).addClass('current-left');
      }
    });
  });

});



/*---------------------------
                              Fullpage
---------------------------*/
  if( $('.fullpage').length > 0) {
      $('.fullpage').fullpage({
          //Navigation
          //menu: '#menu',
          lockAnchors: false,
          //anchors:['firstPage', 'secondPage'],
          navigation: true,
          navigationPosition: 'right',
          //navigationTooltips: ['firstSlide', 'secondSlide'],
          showActiveTooltip: false,
          slidesNavigation: true,
          slidesNavPosition: 'bottom',

          //Scrolling
          css3: true,
          scrollingSpeed: 1000,
          autoScrolling: true,
          fitToSection: true,
          fitToSectionDelay: 0,
          scrollBar: false,
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          loopBottom: false,
          loopTop: false,
          loopHorizontal: true,
          continuousVertical: false,
          //normalScrollElements: '#element1, .element2',
          scrollOverflow: false,
          touchSensitivity: 15,
          normalScrollElementTouchThreshold: 5,

          //Accessibility
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,

          //Design
          controlArrows: true,
          verticalCentered: true,
          resize : false,
          //sectionsColor : ['#ccc', '#fff'],
          paddingTop: '0',
          paddingBottom: '0',
          //fixedElements: 'header, .footer',
          responsiveWidth: 1200,
          responsiveHeight: 0,

          //Custom selectors
          sectionSelector: 'section',
          slideSelector: '.fp-slide',

          //events
          onLeave: function(index, nextIndex, direction){},
          afterLoad: function(anchorLink, index){},
          afterRender: function(){},
          afterResize: function(){},
          afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
          onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
      });
      $(document).on('click', '.down_button', function(){
        $.fn.fullpage.moveSectionDown();
      });
    } // endif





$('.scrollBar').perfectScrollbar({
  suppressScrollX: true
});
$(window).resize(function(event) {
  $('.scrollBar').perfectScrollbar('update');
});



/*---------------------------
                              MENU TOGGLE
---------------------------*/
$('.menu-button').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('header').toggleClass('active');
  if ($('header').hasClass('active')) {
      $('body, html').css('overflow', 'hidden');
    } else {
      $('body, html').css('overflow', 'visible');
    }
});


/*---------------------------
                              Sliders
---------------------------*/

$('.trustUs__comp').slick({
  arrows: false,
  dots: true,
  fade: true
});

$('.doneProjects').slick({
  arrows: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});


$('.magnific').magnificPopup({
type: 'inline',

fixedContentPos: false,
fixedBgPos: true,

overflowY: 'auto',
modal: false,

closeBtnInside: true,
preloader: false,

midClick: true,
removalDelay: 300,
mainClass: 'my-mfp-slide-bottom'
});

$(document).on('click', '.popup-modal-dismiss', function (e) {
e.preventDefault();
$.magnificPopup.close();
});


});




