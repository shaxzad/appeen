/**
* @author shahzad ali <shahzadnagri99@gmail.com>
* @date november 20, 2015
* @description 
**/

$(window).on('load',function(){
	// Code ? When the page finished loading.

	// call init()
	$('#loading').fadeOut();
	init();
	fitText();


});


/**
*	Make an init function where place all other functions.
*/
function init(){
	// vegas

	vegasHeader();
	switcher();
	vegasBaground();
	wow();
	owlCarousel();
	smothScroll();
	typed();
	pageNav();
	back2top();
}

/** Vegas Plugin **/

function vegasHeader(){
	$("#slider").vegas({
	    slides: [
	        { src: "img/varient-a/slider/slider-2.jpg"},
	        { src: "img/varient-a/slider/slider-4.jpg"},
	        { src: "img/varient-a/slider/slider-1.jpg"},
	        { src: "img/varient-a/slider/slider-3.jpg"},
	    ],
	    slide: 1,
	    preload: true,
	    timer: false,
	    overlay: 'frameworks/vegas/overlays/07.png',
	    transition: 'fade',
	    animation: 'random',
	});

}
function vegasBaground(){
	$("#slider-video").vegas({
	    slides: [
	        { src: "video/video-banner-poster.jpg"},
	        { src: "video/video-banner-poster.jpg",
	        	video:{
	        		src: [
	        			// 'https://youtu.be/PfPdYYsEfAE',
	        			'video/deskwork.webm',

	        		
	        		],
	        		loop: false,
	        		mute: true,

	        	}
	    	}
	    ],
	    transition: 'fade',
	    animation: 'random',
	    timer: false,
	    overlay: 'frameworks/vegas/overlays/07.png',
	});
}
function wow(){

	new WOW().init();
}

function owlCarousel() {
	$("#owl").owlCarousel({
	 	items : 1,
	 	itemsTablet : [1215, 1],
	 	itemsTabletSmall : [497, 1],
	 	autoPlay : true,
	 	responsive: true,
	 	responsiveRefreshRate : 100,
    	responsiveBaseWidth: window,
    	autoHeight : false,
	  });
}
function smothScroll() {
	$(".smoth-scroll").smoothScroll ( {
		speed: 2000,
		offset: 0,
	});
}
function typed () {
  $('.type-writer .type-here').typed({
        strings: ["Multi-Screen","mobile-screen", "tablet-screen" ],
        typeSpeed: 70,
        backDelay: 2000,
        loop: true,
      });
}
// fittext
function fitText() {
	$("#fittext1").fitText();
    $("#fittext2").fitText(2.0, { minFontSize: '20px', maxFontSize: '48px' });
     }

// color switcher

function switcher(){
	$('.sw-clr').click(function(){
		ths = $(this);
		fileName = 'css/' + ths.data('target') + '.css';
		$('#switcher-target').prop('href', fileName);
	});
}



function pageNav() {
	$("#nav").onePageNav ( {
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	begin: function() {
	},
	end: function() {
	},
	scrollChange: function($currentListItem) {
	}
	});
}
function back2top(){
  // height -> scrollTop > height.


  $(window).scroll(function(){
      scrollTop = $(this).scrollTop();
      height = $(window).height();
      element = $("#backtotop");
      // display 
      if(scrollTop > height) {
        element.fadeIn('slow');
      } else {
        element.fadeOut('slow');
      }
  });

  

  scrollTop = $(window).scrollTop();
  height = $(window).height();
  element = $("#backtotop");

  if(scrollTop > height) {
    element.fadeIn();
  } else {
    element.fadeOut();
  }


	$('#backtotop').click(function(){
    $('html, body').animate({scrollTop: 0}, 800);
  });


}