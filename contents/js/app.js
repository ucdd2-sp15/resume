$("#travel-button").on( "click", function( event ) {
  	$("#travel").toggleClass("hidden")
  	$("#travel-button").toggleClass("hidden-button")
})

$("#travel-goto").on("click", function( event){
	$('html, body').animate({
        scrollTop: $("#travel").offset().top
    }, 500);
})

$("#hobby-button").on( "click", function( event ) {
  	$("#hobby").toggleClass("hidden")
  	$("#hobby-button").toggleClass("hidden-button")
})

$("#hobby-goto").on("click", function( event){
	$('html, body').animate({
        scrollTop: $("#hobby").offset().top
    }, 500);
})

