/*

if logic = 75 degrees red, less blue 

get the user input - which is a string, assign to var
convert input to number float
reset var to new value


if: user clicks f to c
create variable for c
c  = f * 5/9 - 32
function display input f = c  
find background
function change background to blue
T(°C) = (T(°F) - 32) × 5/9

if: user clicks c to f
create variable for F
f  = c * 9/5 + 32
display input f = c  
find background
change background to purple



if input is empty:
display error message
background is white still


$('#light_switch').on('click',function(){
	$('body').css("background-color","black");
});

*/


var input;
var inputString;
var fahrenheit; 
var celsius;

$('#fahrenheit_to_celsius').on('click', function () {
		inputFah = $('#temperature').val();
		inputFahFloat = parseFloat(inputFah);
		celsius = (inputFahFloat-32)*5/9;
		$('#result').html(inputFah + ' °F = ' + celsius + ' °C');
		$('body').css("color","white");
		if (inputFahFloat >= 75) // change bkdg to red
			$('body').css("background-color","#db345e");
		else //change blue
	  		$('body').css("background-color","#6396e8");
	});



$('#celsius_to_fahrenheit').on('click', function () {
		inputCel = $('#temperature').val();
		inputCelFloat = parseFloat(inputCel);
		fahrenheit = (inputCelFloat*9/5)+32;
		$('#result').html(inputCel + ' °C = ' + fahrenheit + ' °F');
			$('body').css("color","white");
		if (fahrenheit >= 75) // change bkdg to red
			$('body').css("background-color","#db345e");
		else  //change blue
	  		$('body').css("background-color","#6396e8");
	});





// if (inputFahFloat > 75 || fahrenheit > 75) // change 
// 		//bkdg to red
// 		$('body').css("background-color","red");
// else //change blue
// 	  	$('body').css("background-color","blue");



