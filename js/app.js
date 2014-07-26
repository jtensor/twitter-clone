//$(document).ready(function(){
	
	// var charCount = $('#char-count');
	// charCount.text('150');

//$('#tweet-controls').css({"display":"none"});  //step1
//1.capture click in text area, 2. toggle tweet-controls

// $('#tweet-controls').toggle();
// $(".tweet-compose").click(function(){
// 	$('#tweet-controls').toggle();
// 	$('.tweet-compose').height('200%');
// });

 var toggleComposeHeight = function(){
	var compose = $('#tweet-content .tweet-compose');
		if(compose.height()== 21){
			compose.height('42px');
		}else{
			compose.height('21px');
		}
	}	
var countChar = function(){
	var compose = $('#tweet-content .tweet-compose');
	var charCount = $('#char-count');
	charCount.text(140 - compose.val().length);
	if((140 - compose.val().length ) < 0){
		tooTooMuch();
	}else if((140 - compose.val().length ) <= 10){
		tooMuch();
	}else{
		justRight();
	}
}	
var tooMuch = function(){
	$('#char-count').css({'color':'red'});
	$("#tweet-submit").css({'opacity':'1'});
}
var tooTooMuch = function(){
	$("#tweet-submit").css({'opacity':'.5'});
	//$("#tweet-submit").attr('disabled');
}
var justRight = function(){
	$('#char-count').css({'color':'black'});
	$("#tweet-submit").css({'opacity':'1'});
}

$(document).ready(function(){
	$('#tweet-controls').hide();
	$('#tweet-content .tweet-compose').on('click', function(){
		toggleComposeHeight();
		$('#tweet-controls').toggle();
	});
	$('#tweet-content .tweet-compose').change(countChar);
	$('#tweet-content .tweet-compose').keyup(countChar);
	var compose = $('#tweet-content .tweet-compose');
	$('.button').click(function(){	
		var myTweet = '<div class="tweet">\
						<div class="content">\
							<img class="avatar" src="img/DSC_8813 copy.jpg" />\
							<strong class="fullname">Jamie Titensor</strong>\
							<span class="username">@jtensor</span>\
							<p class="tweet-text">' + compose.val() + '</p>\
							<div class="tweet-actions">\
								<ul>\
									<li><span class="icon action-reply"></span> Reply</li>\
									<li id ="retw"><span class="icon action-retweet"></span> Retweet</li>\
									<li id="star"><span class="icon action-favorite"></span> Favorite</li>\
									<li><span class="icon action-more"></span> More</li>\
								</ul>\
							</div>\
							<div class="stats">\
								<div class="retweets">\
									<p class="num-retweets">30</p>\
									<p>RETWEETS</p>\
								</div>\
								<div class="favorites">\
									<p class="num-favorites">6</p>\
									<p>FAVORITES</p>\
								</div>\
								<div class="users-interact">\
									<div>\
										<img src="img/DSC_8813 copy.jpg" />\
										<img src="img/vklimenko.jpg" />\
									</div>\
								</div>\
								<div class="time">\
									1:04 PM - 19 Sep 13\
								</div>\
							</div>\
							<div class="reply">\
								<img class="avatar" src="img/DSC_8813 copy.jpg" />\
								<textarea class="tweet-compose" placeholder="Reply to @jtensor"/></textarea>\
							</div>\
						</div>\
					</div>'
		$('#stream').prepend(myTweet);
	actions();
	});
var actions = function(){
	$('.tweet-actions').css({'opacity':'.2'});
	$('.tweet-actions').mouseenter(function(){
		$(this).css({'opacity':'1'})
	});
	$('.tweet-actions').mouseleave(function(){
		$(this).css({'opacity':'.2'})
	});	
	$("#star").on('click', function(){
		$('#star').css({'color':'#ffac33','opacity': '1'})
	});
	$("#retw").on('click', function(){
		$('#retw').css({'color':'#5c913b','opacity': '1'})
	});
	$('.stats, .reply').hide();
	$('.tweet-text').on('click', function(){
  		$('.stats, .reply').show()
	});
	$('.tweet-text').on('dblclick', function(){
  		$('.stats, .reply').hide()
	});}

	
  	$("time.timeago").timeago();

	actions();
});
