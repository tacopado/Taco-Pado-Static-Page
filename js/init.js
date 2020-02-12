(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
	    fullWidth: true,
	    indicators: true
	  });
    $('.scrollspy').scrollSpy();
    $('select').formSelect();
    $('.collapsible').collapsible();
  }); // end of document ready
})(jQuery); // end of jQuery name space
