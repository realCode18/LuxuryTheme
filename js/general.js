/*
* LUXURY - Landing page for Real Estate
* Build Date: March 2019
* Last Update: March 2019
* Author: Alessio Frugoni
* Copyright (C) 2019 Alessio Frugoni
* This is a premium product available exclusively here : https://alessiofrugoni.com
*/

$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});

// when the modal is opened autoplay it
$('#myModal').on('shown.bs.modal', function (e) {

// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" );
})

// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc);
})
// document ready
});


//Change color Nav on scroll
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

//Third Slide settings
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoWidth:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
});
