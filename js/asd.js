(function($){
  $(function(){
    $('.carousel.carousel-slider').carousel({
    	fullWidth: true
     });
  }); // end of document ready
});

function leer_mas(btn) {
    if($(btn).text()== "Leer más"){
      $(btn).text("Menos");
      $(btn).closest(".card-content").find(".truncate").toggleClass('truncate truncate_non');
    }else{
      $(btn).text("Leer más");
      $(btn).closest(".card-content").find(".truncate_non").toggleClass('truncate_non truncate');
    }
}
