	(function($) {

		$(document).on('change', '.variations_form select', function(){
			let Variation = $(this).find('option:selected').text();

			$('#variation_link').text($(this).find('option:selected').text());
		})
		$(document).on('click', '.single_add_to_cart_button_sticky', function(){
			$('.single_add_to_cart_button').trigger('click');
		});

		$(document).on('input', '.qty', function(){
			let Qty = $(this).val();
			$('.qty').val($(this).val());
		});

		$(window).scroll(function() {
			var top_of_element = $(".single_add_to_cart_button").offset().top;
			var bottom_of_element = $(".single_add_to_cart_button").offset().top + $(".single_add_to_cart_button").outerHeight();
			var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
			var top_of_screen = $(window).scrollTop();

			if (top_of_screen > bottom_of_element){	
				$('#sticky-conatiner').addClass('isVisible');
			} else {
				$('#sticky-conatiner').removeClass('isVisible');
			}
		});
	})( jQuery );
