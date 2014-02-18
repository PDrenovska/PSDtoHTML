$(document).ready(function() {
	$('.drop-down').chosen({
		disable_search: true
	});
	$('.flexslider').flexslider({
	    animation: "slide",
	    move: 1,
	    animationLoop : false,
	    controlNav : false,
	    prevText : "",
	    nextText : ""
    });
	$('.featured-flexslider').flexslider({
	    animation: "slide",
	    itemWidth: 208,
	    directionNav: false,
	    move: 1,
	    prevText : "",
	    nextText : ""
    });

});