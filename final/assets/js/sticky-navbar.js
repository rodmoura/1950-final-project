$(document).ready(function (){

	/* detect window scroll events */
	$(window).scroll(function (){
		
        // Height of the header
		$heightOfHeader = 150; 
        
        // detect if the user is at the top of the page...
		if($(window).scrollTop() <= $heightOfHeader) {			
            $("nav").css("position","static");
		} else {
		// ...or if the user has scrolled away from the top
			$("nav").css("position","fixed");
            $("nav").css("z-index","10000");
			$("nav").css("top","0px");
		}
	});
});