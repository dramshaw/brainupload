var flashcount = 0;
var repeat;
$( document ).ready(function() {
	$('#startbutton').click(function() {
  		dataupload();
  	});
});
function dataupload() {
	$('#startbutton').hide();
	setTimeout(function(){
		$('.jumbotron h1').text('Preparing Data-burst...');
		$('.jumbotron .infostring').text('');		
	},1000);
	setTimeout(function(){
		$('.jumbotron h1').text('Encoding for optical transmission...');		
	},3000);
	setTimeout(function(){
		$('.jumbotron h1').text('Callibrating EM frequency...');
		$('body').css('background-color','#ffffff');
	},5100);
	setTimeout(function(){
		$('body').css('background-color','#eeeeee');
	},5200);
	setTimeout(function(){
		$('body').css('background-color','#dddddd');
	},5300);
	setTimeout(function(){
		$('body').css('background-color','#cccccc');
	},5400);
	setTimeout(function(){
		$('body').css('background-color','#bbbbbb');
	},5500);
	setTimeout(function(){
		$('body').css('background-color','#aaaaaa');
	},5600);
	setTimeout(function(){
		$('body').css('background-color','#999999');
	},5700);
	setTimeout(function(){
		$('body').css('background-color','#888888');
	},5800);
	setTimeout(function(){
		$('body').css('background-color','#777777');
	},5900);
	setTimeout(function(){
		$('body').css('background-color','#666666');
	},6000);
	setTimeout(function(){
		$('body').css('background-color','#555555');
	},6100);
	setTimeout(function(){
		$('body').css('background-color','#444444');
	},6200);
	setTimeout(function(){
		$('body').css('background-color','#333333');
	},6300);
	setTimeout(function(){
		$('body').css('background-color','#222222');
	},6400);
	setTimeout(function(){
		$('body').css('background-color','#111111');
	},6500);
	setTimeout(function(){
		$('body').css('background-color','#000000');
		$('.jumbotron').animate({'opacity':0},1000);	
	},6600);
	setTimeout(function(){
		repeat = setInterval(function(){
			if (flashcount > 150) {
				clearInterval(repeat);
				$('body').css('background-color','#000000');
				$('.jumbotron h1').text('Upload complete');
				$('.jumbotron .infostring').text('If bleeding from the eyes continues for more than 4 hours, consult a mortician.');				
				$('.jumbotron').animate({'opacity':1},1000);				
			} else {
				flashcount += 1;
				$('body').css('background-color',getRandomColor());				
			}
		},10);
	},8000);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}