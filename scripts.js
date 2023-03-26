	(function($) {
		
		// On change to variation attribute reflect the selected attribute on the sticky bar
		$(document).on('change', '.variations_form select', function(){
			let Variation = $(this).find('option:selected').text();

			$('#variation_link').text($(this).find('option:selected').text());
		});
		
		// Trigger a click on the add to cart button when the sticky button is clicked
		$(document).on('click', '.single_add_to_cart_button_sticky', function(){
			$('.single_add_to_cart_button').trigger('click');
		});

		
		// trigger a change to the qty input on input
		$(document).on('input', '.qty', function(){
			let Qty = $(this).val();
			$('.qty').val($(this).val());
		});

		
		// Detect the window scroll position to toggle the appearance of the sticky bar
		$(window).scroll(function() {
			
			// detect top offset tot he add to cart button
			var top_of_element = $(".single_add_to_cart_button").offset().top; 
			
			// Set the bottom offset of the add to cart div
			var bottom_of_element = $(".single_add_to_cart_button").offset().top + $(".single_add_to_cart_button").outerHeight();
			
			// Get the bottom of the screen position in px
			var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
			
			// set the top of screen to scroll to
			var top_of_screen = $(window).scrollTop();

			// check if top of the screen is greater than the bottom of the add to cart div
			if (top_of_screen > bottom_of_element){	
				
				// If the top of the screen is greater than bottom of the add to cart div toggle the visible class
				$('#sticky-conatiner').addClass('isVisible');
			} else {
				
				// if it's not greater then remove the visible class
				$('#sticky-conatiner').removeClass('isVisible');
			}
		});
	})( jQuery );
