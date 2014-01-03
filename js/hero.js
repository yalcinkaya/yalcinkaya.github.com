/*	Set UI Dimensions
---------------------------------------------------------------------- */

	$(window).resize(function(){
		setUIDimensions();
	});

	function setUIDimensions(){
		var viewWidth = $(window).width(),
			viewHeight = $(window).height(),
			containerWidth = $('div.container').width();
		$('div.box').css('height', viewHeight);
	} setUIDimensions();