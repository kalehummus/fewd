/*

make a var for total
take user input . val
convert str val to parsefloat
make it only 2 sig figs 
append entry to to html 
add it to total
add total to html display
reset form

*/



// Create a global variable for the total
var total = 0; 
// Create a function you can run when you submit the field Hint: .submit() in jQuery

$('button').on('click',function(){
	var input = convertInputToCurrency(input);
	$('#entries').append('<th>'+input+'</th>');
	total = total + parseFloat(input);
	$('#total').html('$' + total); 
});


function convertInputToCurrency(num1){
	var currency = $('#newEntry').val()
	currency = parseFloat(currency);
	currency = currency.toFixed(2)
	return currency;
}


// $('button').on('click',function(){
// 	var input=$('#newEntry').val;
// 	input = parseFloat(input);
// 	input = input.toFixed(2);
// 	console.log(input);
// });

// var newEntry = $('button').on('click',getInput());
// console.log (newEntry);
// total = total + input;
// 
// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
