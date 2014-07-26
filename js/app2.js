$('input[type="submit"]').attr('disabled','disabled');
     $('input[type="text"]').keyup(function() {
        if($(this).val() != '') {
           $('input[type="submit"]').removeAttr('disabled');
        }
     });


 var toggleComposeHeight = function(){
	var compose = $('#tweet-content .tweet-compose');
		if(compose.height()== '21px'){
			compose.height('42px');
		}else{
			compose.height('21px');
		}
	}	
var countChar = function(){
	var compose = $('#tweet-content .tweet-compose');
	var charCount = $('#char-count');
	charCount.text(140 - compose.val().length);
	
}	

$(document).ready(function(){
	$('#tweet-controls').css({"display":"none"});
	$('#tweet-content .tweet-compose').click(function(){
		toggleComposeHeight();
			$('#tweet-controls').css({"display":"block"});
	});
$('#tweet-content .tweet-compose').keypress(function(){
	countChar();
	if((140 - compose.val().length ) <= 100){
		$('#char-count').css({'color':'red'});
		$('.button')
	}
})
});