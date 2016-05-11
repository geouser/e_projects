
// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};



jQuery(document).ready(function($) {


/*---------------------------
                              Shuffle
---------------------------*/

var filtering = (function( $ ) {
  'use strict';

  var $grid = $('.shuffle__container'),
    $filterOptions = $('.shuffle__controls__button'),

  init = function() {


    // None of these need to be executed synchronously
    setTimeout(function() {
      setupFilters();
    }, 100);

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '.shuffle__container__item'
    });
  },

  // Set up button clicks
  setupFilters = function() {
    var $btns = $filterOptions;
    $btns.on('click', function() {
      var $this = $(this),
        isActive = $this.hasClass( 'active' ),
        group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.shuffle__controls__button.active').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  };

  return {
    init: init
  };
}( jQuery ));
$(document).ready(function() {
  filtering.init();
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





/*$('.scrollBar').perfectScrollbar({
  suppressScrollX: true
});*/



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

/*$('.trustUs__comp').slick({
  arrows: false,
  dots: true,
  fade: true
});

$('.doneProjects').slick({
  arrows: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
*/
});




