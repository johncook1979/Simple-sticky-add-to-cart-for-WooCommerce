/**
  * Create the add to cart container
  *
*/


add_action('wp_footer', 'my_sticky_add_to_cart');
function my_sticky_add_to_cart(){

  global $woocommerce;
  global $product;

  // conditionally display only on product pages
  if ( ! is_admin() && is_product() ) {
    ?>
<div id="sticky-conatiner">
	<h5 class="title sticky-title"><?= get_the_title();?></h5>
	<div class="sticky-inner">
		<span class="sticky-bar img-container">
			<?= $product->get_image('thumbnail');?>
		</span>


		<div class="add-to-cart-container sticky-bar">
			<?php
									 if( $product->is_type( 'variable' ) ){
			?>
			<span class="option-select">
				<a id="variation_link" href="#variation_select">Choose an option</a>
			</span>

			<?php
									 }
			?>
			<input type="number" class="input-text qty text" name="quantity" value="1" title="Qty" size="4" min="1" max="<?= $product->get_stock_quantity();?>" step="1" placeholder="" inputmode="numeric" autocomplete="off">

			<button type="submit" name="add-to-cart" value="<?= get_the_ID();?>" class="single_add_to_cart_button_sticky button alt wp-element-button">Add to cart</button>

			<div class="added_to_cart_notification">

			</div>
		</div>
	</div>
	
</div>

    <?php
  }
}






/**
 * 
 * Add id div above variation form for anchor tag. Used for the sticky add to cart
 * 
*/

add_action('woocommerce_before_variations_form', 'my_variation_anchor');
function my_variation_anchor(){
	echo '<div id="variation_select"></div>';
}



/**
  * Enque the scripts and styles
  *
*/

add_action( 'wp_enqueue_scripts', 'my_load_sticky_add_to_cart_scripts' );
function my_load_sticky_add_to_cart_scripts() {
    	wp_enqueue_script( 'sticky-add-to-cart-scripts', get_stylesheet_directory_uri() . '/scripts.js' , __FILE__ );
}

add_action( 'wp_enqueue_scripts', 'my_load_sticky_add_to_cart_styles', 15 );
function my_load_sticky_add_to_cart_styles() {
	wp_enqueue_style( 'sticky-add-to-cart-css', get_stylesheet_directory_uri() . '/styles.css', false, '1.0', 'all' );
}



