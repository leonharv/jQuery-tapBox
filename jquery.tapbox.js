/*
 * tapBox 1.1 - jQuery spinbox/selectbox Plugin
 *
 * Copyright (c) 2011 Viktor Leonhardt (leonharv@unix-ag.uni-kl.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Usage information: https://github.com/leonharv/jQuery-tapBox
 *
 */

jQuery.fn.tapBox = function(options){
	// set defaults
	$(this).data('tapBox', {
		settings : {
			max: 100,
			min: -100,
			'steps': 1,
			'wrapper': 'span',
			'customClass': 'tap',
			'upText': '+',
			'downText': '-',
			'repeat': true
		}
	});
	var settings = $.extend($(this).data('tapBox').settings, options);
  
  // create the template down-button
  var downButton = $('<' + settings.wrapper + '/>', {'class': settings.customClass + 'Down', 'style': 'cursor:pointer;'}).text(settings.downText);
  // create the template up-button
  var upButton = $('<' + settings.wrapper + '/>', {'class': settings.customClass + 'Up', 'style': 'cursor:pointer;'}).text(settings.upText);
			  
  return this.each(function(index,Element) {
  	switch(this.tagName){
  		case 'SELECT':
  			// hide the selectbox and identify it
  			$(this).hide().addClass('tapBox');
  			// create display
  			var display = $('<span/>', {'class': settings.customClass + 'Display'});
  			// insert the selected text in the display
  			display.text($(this).find('option:selected').text());
  			// copy the templateButtons
  			var selDownButton = downButton.clone();
				var selUpButton = upButton.clone();
  			// insert display and both buttons in the DOM
  			$(this).after(selDownButton, display, selUpButton);
  			
  			// set event for downButton
				$(selDownButton).click(function(){
					if(!$(Element).find('option:selected').is('option:first-child')) {
						// save the selected entry
						var current = $(Element).find('option:selected');
						// deselect all
						$(Element).find('option').removeAttr('selected');
						// select the previous
						$(current).prev().attr('selected', true);
						// set a trigger
						$(Element).change();
						// update the display
						$(this).next('.tapDisplay').text($(current).prev().text());
					} else {
						if(settings.repeat) {
							// deselect all
							$(Element).find('option').removeAttr('selected');
							// select the first entry
							$(Element).find('option:last').attr('selected', true);
							// set a trigger
							$(Element).change();
							// update the display
							$(this).next('.tapDisplay').text($(Element).find('option:last').text());
						}
					}
				});
				
				// set event for upButton
				$(selUpButton).click(function(){
					if(!$(Element).find('option:selected').is('option:last-child')) {
						// save the selected entry
						var current = $(Element).find('option:selected');
						// deselect all
						$(Element).find('option').removeAttr('selected');
						// select the next
						$(current).next().attr('selected', true);
						// set a trigger
						$(Element).change();
						// update the display
						$(this).prev('.tapDisplay').text($(current).next().text());
					} else {
						if(settings.repeat) {
							// deselect all
							$(Element).find('option').removeAttr('selected');
							// select the last entry
							$(Element).find('option:first').attr('selected', true);
							// set a trigger
							$(Element).change();
							// update the display
							$(this).prev('.tapDisplay').text($(Element).find('option:first').text());
						}
					}
				});
  			break;
  		case 'INPUT':
				// save the current element
				$(this).addClass(settings.customClass + 'Display');
				var intDownButton = downButton;
				var intUpButton = upButton;
				// insert the up/down-tapBox
				$(this).before(intDownButton);
				$(this).after(intUpButton);
				
				// set event for downButton
				$(intDownButton).click(function(){
					var number = parseFloat( $(this).next('.' + settings.customClass + 'Display').val() ) - settings.steps;
					if(number >= settings.min)
						$(this).next('.' + settings.customClass + 'Display').val( number );
						// set a trigger
						$(this).next('.' + settings.customClass + 'Display').change();
				});
				
				// set event for upButton
				$(intUpButton).click(function(){
					var number = parseFloat( $(this).prev('.' + settings.customClass + 'Display').val() ) + settings.steps;
					if(number <= settings.max)
						$(this).prev('.' + settings.customClass + 'Display').val( number );
						// set a trigger
						$(this).prev('.' + settings.customClass + 'Display').change();
				});
				break;
			default:
				alert('Please use TapBox only for Selects and Intputs, you are trying to use \'' + Element.tagName + '\'');
		}
  });
}

