// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


(12.941436, 80.209227)

function initMap() {
var uluru = {lat: 12.936102, lng: 80.209141};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 18,
  center: uluru
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map,
});
}



$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    responsive:true,
    items:1,
    dots:false,
    autoplay:true
})