$(document).ready(function(){
	
	// Smooth jump2anchor navi
	
	$('.main-menu a[href*="#"]:not([href="#"]), .slicknav_nav a[href*="#"]:not([href="#"])').click(function() {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);

			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top-200
				}, 1000);
				return false;
			}
		}
	});
	
	
	// Back2top
	
    if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	
	
	// Datepicker
	
	$('#datepicker').datepicker({
		iconsLibrary: 'fontawesome',
		icons: {
		 rightIcon: '<span class="fa fa-caret-down"></span>'
	 }
	});
	$('#datepicker2').datepicker({
		iconsLibrary: 'fontawesome',
		icons: {
		 rightIcon: '<span class="fa fa-caret-down"></span>'
	 }

	});
	
	
	// Tooltips
	
	 $('[data-toggle="tooltip"]').tooltip()
	 $('[data-toggle="popover"]').popover();
	 $('.popover-dismiss').popover({
	  trigger: 'focus'
	})

});