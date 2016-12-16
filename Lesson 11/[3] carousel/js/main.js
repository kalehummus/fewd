/*

press next or previous to change what the link is

0. make an array for teh images
1. If user presses previous, then go back index in array
	
2. if user presses next, then go forward in array
3
*/
var images = ['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_5.jpg'];

var index = 0;

//clicking the next button 
$('#next').on('click',function(){
	//makes the index one more
	index = nextButton(index);	
	//changes image attribute to index in array
	$('#image-to-vote-on').attr('src',images[index]);
});

//clicking previous button
$('#prev').on('click',function(){
	index = backButton(index);	
	$('#image-to-vote-on').attr('src',images[index]);
});




function nextButton (){
	//if the index is one less than the total length, otherwise will go to last one twice
	if (index < images.length-1){
		index = index + 1;
	} else {
		index = 0;
	}
	// console.log(index);
	return(index);
};

function backButton () {
	if (index > 0){
		index = index - 1;
	}
	else {
		index = 5;
	}
	// console.log(index);
	return(index);
	
};
