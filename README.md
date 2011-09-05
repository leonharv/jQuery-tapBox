A simple spinbox for jQuery
=====================================

This plugin is also optimized for smartphones.

Installation
------------

Simply include the 'jquery.tapbox.js' file in the head of your website. You also need jQuery and make shure, that jQuery is included bevore the plugin.

<head>
 <script src="jquery-1.6.2.min.js"></script>
 <script src="jquery.tapbox.js"></script>
</head>

Usage
-----

Assuming you have an element that you'd like to bind the spinbox to:

	<input type="text" name="max_items" id="spinbox" />
    
You can set this input as a spinbox simply like this:

	$('#spinbox').tapbox();
	
Additional you can define some options:

	var options = {
		max: 100,
		min: 0,
		steps: 1
	};
	
	$('#spinbox').tapbox(options);
	
Options
-------

* max:
	Defines the maximal number.
* min:
	Defines the minimal number.
* steps:
	Defines the steps of increasing/decreasing of the counter
