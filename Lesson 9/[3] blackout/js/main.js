// Together: write pseudo code
// Objective: we want to change the background color when we click on the light switch

/*

background is white
find button
click the button
find background element
change background to black

*/


$('#light_switch').on('click',function(){
	$('body').css("background-color","black");
});


// Hint: for your condition, you'll need to look up and use the .hasClass() method. You'll want to use this as part of your condition.

// Hint #2: Refer to the syntax on the cheat sheet. The entire condition gets wrapped in parentheses. (your condition goes here)
