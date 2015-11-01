
$(document).ready( function() {


	var width = $(window).width();
	console.log("Info: "+width);


	/*
		If the 'width' variable (width of the window) is less then 352px (22em), then we want to perform some actions
	*/
	if (width < 376) {
		$(".nav-toggle").removeClass("hidden");
		$(".nav-toggle").addClass("shown"); // Adding a class to show our toggle

		$("nav").hide();		// Setting nav to hide using jQuery's method
	}

	/*
		Here we are running a function when #navToggle is clicked
	*/
	$(".nav-toggle").click( function() { 
		// The .slideToggle method slides the 'nav' open/closed over 500ms
		$("nav").slideToggle(500);
	});


});