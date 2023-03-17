<?php
/**
 * Plugin Name:       Buttons
 * Description:       Block for showing button.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Fixolab
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       buttons
 *
 * @package           block-course
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function blocks_course_button_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'blocks_course_button_init' );


add_theme_support("editor-styles");
add_editor_style("style-editor.css");

add_theme_support("responsive-embeds");

add_theme_support("align-wide");

add_theme_support( "editor-color-palette", array(
	array(
		'name' => esc_attr__( 'button magenta', 'themeLangDomain'), 'slug' => 'button-magenta', 'color' => '#a156b4'
	),
	array(
		'name' => esc_attr__( 'button blue', 'themeLangDomain'), 'slug' => 'button-blue', 'color' => '#3182ce'
	),
	array(
		'name' => esc_attr__( 'button pink', 'themeLangDomain'), 'slug' => 'button-pink', 'color' => '#d53f8c'
	),
	array(
		'name' => esc_attr__( 'button gray', 'themeLangDomain'), 'slug' => 'button-gray', 'color' => '#1a202c'
	),
	array(
		'name' => esc_attr__( 'button orange', 'themeLangDomain'), 'slug' => 'button-orange', 'color' => '#ed8936'
	),
	array(
		'name' => esc_attr__( 'button white', 'themeLangDomain'), 'slug' => 'button-white', 'color' => '#fff'
	),
));


// add_theme_support( "disable-custom-colors" );

add_theme_support( "editor-gradient-presets", array(
	array(
		'name' => esc_attr__( 'Red to Blue', 'themeLangDomain'),
		'gradient' => 'linear-gradient(135deg, #e4064d 0%, #2c59ee 100%)', 'slug' => 'red-to-blue'
	),
	array(
		'name' => esc_attr__( 'Green to Yellow', 'themeLangDomain'),
		'gradient' => 'linear-gradient(135deg, #3ce406 0%, #d6e029 100%)', 'slug' => 'green-to-yellow'
	),
	array(
		'name' => esc_attr__( 'Green to Blue', 'themeLangDomain'),
		'gradient' => 'linear-gradient(135deg, #3ce406 0%, #3182ce 100%)', 'slug' => 'green-to-blue'
	),
	array(
		'name' => esc_attr__( 'Orange to Pink', 'themeLangDomain'),
		'gradient' => 'linear-gradient(135deg, #ed8936 0%, #d53f8c 100%)', 'slug' => 'orange-to-pink'
	),
));


add_theme_support('editor-font-sizes', array(
	array(
		'name' => esc_attr__('Small', 'themeLangDomain'),
		'size' => 12,
		'slug' => 'small '
	),
	array(
		'name' => esc_attr__('Regular', 'themeLangDomain'),
		'size' => 16,
		'slug' => 'regular'
	),
	array(
		'name' => esc_attr__('Large', 'themeLangDomain'),
		'size' => 36,
		'slug' => 'large'
	),
));

add_theme_support('custom-font-sizes');

add_theme_support('custom-line-height');

add_theme_support('custom-spacing');

add_theme_support('custom-units', 'px', 'rem', 'em');

