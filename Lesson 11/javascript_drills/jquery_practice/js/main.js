$('h1').html('Winter is Here');

$('#color-p').css('background-color','blue');

$('div').addClass('the-north');

$('#walker').on('click',function(){
	$('#walker').hide();
});


$('button').on('click', function () {
		var theCharacter = $('#character').val();
		console.log(theCharacter);
		if (theCharacter == 'danaerys'){
			$('#answer').html('this is very correct');
		}
		else{
	  		$('#answer').html('this is very wrong');
	  	}
	});


