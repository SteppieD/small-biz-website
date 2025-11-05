<?php
/**
 * WordPress Configuration File
 * Small Business WordPress Template
 *
 * This file loads environment variables and business configuration
 * Will be populated in next phase
 */

// Load environment variables
// Database configuration
// Security keys and salts
// WordPress debugging
// Custom configurations

// Load business-specific configuration
// This file is gitignored and created per deployment
if (file_exists(__DIR__ . '/business-config.php')) {
    require_once __DIR__ . '/business-config.php';
}

// Absolute path to WordPress directory
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

// Sets up WordPress vars and included files
require_once ABSPATH . 'wp-settings.php';
