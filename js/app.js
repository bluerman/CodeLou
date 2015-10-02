	$('.lightbox_trigger').on("click", function(e) {
		e.preventDefault();

		var image_href = $(this).attr("href");
		if ($('#lightbox').length > 0) {

			$('#content').html('<img src="' + image_href + '" >');
			$('#lightbox').show();
		}

		else {
			var lightbox =
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" >' +
				'</div>' +
			'</div>';

			//insert lightbox HTML into page
			$('body').append(lightbox);
		}

	});

	$("body").on('click', '#lightbox', function() {
		$('#lightbox').hide();
	});

var $root = $('html, body');
$('.nav a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
    }, 700);
    return false;
});

$(function(){
    $('.carousel').carousel({
      interval: 3000
    });
});
