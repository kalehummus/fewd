// 1.	When the window is resized

	// a) fade in .circle-two

$(window).on('resize', function () {
	$('.circle-two').fadeIn();
});



// 2. When the user puts their mouse over #trigger
$('#trigger').on('mouseover', function(){
	// a) Add a <li> to the beginning of #myList that contains the text "1" (Hint: you'll need to look up the prepend jquery method)

	$('#myList').prepend('<li>1</li>');

	// b) Add a <li> to the end of #myList that contains the text "5" (Hint: you'll need to look up the append jquery method)
	$('#myList').append('<li>5</li>');
});


// BONUS: When the user scrolls down the page (hint our jquery selector will be $(window) like in example #1)

	// a) Add the .party class to the body
$(window).on('scroll', function(){
	$('body').addClass('party');
});