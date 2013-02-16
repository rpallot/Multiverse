/////////////////////////////////////////////////////////////////////////////
//
//GLOBAL VARIABLES
var currentImage = 0;


$(document).ready(function(){
	
	doSplashScreen();
	
	/////////////////////////////////////////////////////////////////////
	// CLICK FUNCTIONS
	$('#logo').click(function() {
		if ( $(this).hasClass('splash') ) {
			$(this).css({
				"margin"			: "120px 0 0 70px",
				"width"				: "190px",
				"height"			: "228px",
				"background-image"	: "url(img/multiverse-logo.png)",
			}).removeClass('splash');
			$('body > *:not(.hidden)').show();
			
		}
	});
});

//GLOBAL FUNCTIONS
function doSplashScreen() {
	var contentX, contentY;
	
	contentX = ($(window).width() / 2) - 300;
		
	$('#logo').css({
		"height"			: "721px",
		"width"				: "600px",
		"background-image"	: "url(img/splash.png)",
		"margin-left"		: contentX
	}).addClass('splash').show();
}

function getContent(page, type) {
	$.ajax({
		url: "load.php",
		type: "POST",
		data: { page: page, type: type },
		dataType: "json",
		success: function(results) {
			if ( results.page == 'about' ) {
				about(results);
			} else if ( results.page == 'audio') {
				audio(results);
			} else if ( results.page == 'visual') {
				visual(results);
			} else if ( results.page == 'events') {
				events(results);
			} else if ( results.page == 'contact') {
				contact(results);
			} else {
				//Error has occurred.
				console.log(results);
			}
		}
	});
	
}

function about(results) {
	$('#footer').removeClass('white');
	$('#footer').addClass('black');
	$('#imageFrame').hide();
	if ( results.type == 'text' ) {
		$('#textContent').text(results.content);
	}
	$('#textContent').css({
		'height'	: '100px',
		'width'		: '350px',
		'position'	: 'absolute',
		'bottom'	: '200px',
		'top'		: '',
		'left'		: ($(document).width() / 2) - 175
	});
	
}

function visual(results) {
	$('#footer').removeClass('black');
	$('#footer').addClass('white');
	$('#imageFrame').show();
	$('#textContent').text('Rami Kais');
	$('#textContent').css({
		'height'	: '100px',
		'width'		: '200px',
		'position'	: 'absolute',
		'bottom'	: '200px',
		'top'		: '',
		'left'		: ($(document).width() / 2) - 75
	});
	if ( results.type == 'text' ) {
		$('#textContent').text(results.content);
	} else if ( results.type == 'image' ) {
		$('#imageContent').css({
			'background'	: '#000 url(' + results.content[0] + ') no-repeat right bottom',
			'position'			: 'absolute',
			'bottom'			: '0',
			'right'				: '0',
			'height'			: $(document).height(),
			'width'				: $(document).height() * 0.785
		});
		if ( !$('#navigation ul li:last').hasClass('photoNav') ) {
			$('#navigation ul').append('<li class="photoNav"><a id="prev" href="#"><</a>&#160;&#160;&#160;&#160;&#160;<a id="next" href="#">></a></li>');
		}
		$('#next, #prev').click(function() {
			if( currentImage == 0 ) {
				currentImage = 1;
				$('#imageContent').css({
					'background'	: '#000 url(' + results.content[currentImage] + ') no-repeat right bottom',
					'position'			: 'absolute',
					'bottom'			: '0',
					'right'				: '0',
					'height'			: $(document).height(),
					'width'				: $(document).height() * 0.785
				});
				$('#textContent').text('Brett McLatchie');
			} else if ( currentImage == 1 ) {
				currentImage = 0;
				$('#imageContent').css({
					'background'	: '#000 url(' + results.content[currentImage] + ') no-repeat right bottom',
					'position'			: 'absolute',
					'bottom'			: '0',
					'right'				: '0',
					'height'			: $(document).height(),
					'width'				: $(document).height() * 0.785
				});
				$('#textContent').text('Rami Kais');
			} else {
				currentImage = 0;
				$('#imageContent').css({
					'background'	: '#000 url(' + results.content[currentImage] + ') no-repeat right bottom',
					'position'			: 'absolute',
					'bottom'			: '0',
					'right'				: '0',
					'height'			: $(document).height(),
					'width'				: $(document).height() * 0.785
				});
			}
		});
	}
}

function events(results) {
	$('#footer').removeClass('white');
	$('#footer').addClass('black');
	$('#imageFrame').hide();
	$('.photoNav').remove();
	if ( results.type == 'text' ) {
		$('#textContent').html(results.content);
	}
	$('#textContent').css({
		'height'	: '100px',
		'width'		: '450px',
		'position'	: 'absolute',
		'bottom'	: '200px',
		'left'		: ($(document).width() / 2) - 225
	});
}

function contact(results) {
	$('#footer').removeClass('white');
	$('#footer').addClass('black');
	$('#imageFrame').hide();
	$('.photoNav').remove();
	if ( results.type == 'text' ) {
		$('#textContent').html(results.content);
		console.log(results.content);
	}
	$('#textContent').css({
		'height'	: '100px',
		'width'		: '200px',
		'position'	: 'absolute',
		'bottom'	: '200px',
		'left'		: ($(document).width() / 2) - 100
	});
}

function audio(results) { 
	$('#footer').removeClass('white');
	$('#footer').addClass('black');
	$('#imageFrame').hide();
	$('.photoNav').remove();
	if ( results.type == 'text' ) {
		$('#textContent').html(results.content);
		console.log(results.content);
	}
	$('#textContent').css({
		'height'	: '100px',
		'width'		: '300px',
		'position'	: 'absolute',
		'top'		: '190px',
		'bottom'	: '',
		'left'		: ($(document).width() / 2) - 100
	});
	$('#albumCover').css({
		'width' 	: '270px',
		'height'	: '270px',
		'background': '#FFF url(\'img/album.jpg\') no-repeat left top',
		'margin-left': '-50px'
	});
}

