// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};



jQuery(document).ready(function($) {


if ($(window).width() >= 1201) {
$('body').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.fullpage/2.5.9/jquery.fullPage.min.css">');
if( $('.fullpage').length > 0) {
      $('.fullpage').fullpage({
          //Navigation
          //menu: '#menu',
          lockAnchors: false,
          //anchors:['firstPage', 'secondPage'],
          navigation: false,
          navigationPosition: 'right',
          //navigationTooltips: ['firstSlide', 'secondSlide'],
          showActiveTooltip: false,
          slidesNavigation: true,
          slidesNavPosition: 'bottom',

          //Scrolling
          css3: true,
          scrollingSpeed: 1500,
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
          responsiveWidth: 0,
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
      $(document).on('click', '.scroll_down', function(){
        $.fn.fullpage.moveSectionDown();
      });
    }
  }

$(window).resize(function() {
if ($(window).width() >= 1201) {
    $('body').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.fullpage/2.5.9/jquery.fullPage.min.css">');
    if( $('.fullpage').length > 0) {
      $('.fullpage').fullpage({
          //Navigation
          //menu: '#menu',
          lockAnchors: false,
          //anchors:['firstPage', 'secondPage'],
          navigation: false,
          navigationPosition: 'right',
          //navigationTooltips: ['firstSlide', 'secondSlide'],
          showActiveTooltip: false,
          slidesNavigation: true,
          slidesNavPosition: 'bottom',

          //Scrolling
          css3: true,
          scrollingSpeed: 1500,
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
          responsiveWidth: 0,
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
      $(document).on('click', '.scroll_down', function(){
        $.fn.fullpage.moveSectionDown();
      });
    }
} else {
    $.fn.fullpage.destroy('all');
    $('link[href="https://cdn.jsdelivr.net/jquery.fullpage/2.5.9/jquery.fullPage.min.css"]').attr('href', '');
}
});


/*---------------------------
                              ADD CLASS ON SCROLL
---------------------------*/
$(function() { 
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 1);
    $element2.toggleClass(className, $document.scrollTop() >= 1);
  });
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


});




