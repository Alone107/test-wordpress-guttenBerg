<?php

/**
 * Plugin Name: My Dynamic Posts
 * Plugin URI: http://test-react-wordpress/
 * Description: Guttenberg dynamic block
 * Author: Alone
 * Author URI: http://test-react-wordpress/
 */


function alone_myblock_init()
{
    register_block_type_from_metadata(__DIR__);
}


add_action('init', 'alone_dynamicblock_init');
