# A simple spinbox/selectbox for jQuery

This plugin is also optimized for smartphones.

## Installation

Simply include the 'jquery.tapbox.js' file in the head of your website. You also need jQuery and make shure, that jQuery is included bevore the plugin.

	<head>
	 <script src="jquery-1.6.2.min.js"></script>
	 <script src="jquery.tapbox.js"></script>
	</head>

## Usage

Assuming you have an element that you'd like to bind the tapBox to:

	<input type="text" name="max_items" id="spinbox" />
	
or

	<select name="lang" id="selectbox">
		<option value="EN">English</option>
		<option value="DE">Germany</option>
		<option value="RU">Russian</option>
	</select>
    
You can set this input as a spinbox simply like this:

	$('#spinbox').tapbox();
	
or

	$('#selectbox').tapBox();
	
Additional you can define some options:

	var options = {
		max: 100,
		min: 0,
		steps: 1
	};
	
	$('#spinbox').tapbox(options);
	
## Options
### General:

* wraper:

>		Defines the object of the buttons eg. `<span>` or `<div>`

* customClass:

>		Defines a custom class

* upText:

>		Defines the text of the up-button

* downText:

>		Defines the text of the down-button

### Spinbox:

* max:

>		Defines the maximal number.

* min:

>		Defines the minimal number.

* steps:

>		Defines the steps of increasing/decreasing of the counter

### Selectbox:

* repeat:

>		Enables to repeat the select-list
