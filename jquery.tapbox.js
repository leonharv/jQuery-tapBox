/*
 * tapBox 1.0 - jQuery spinbox plugin
 *
 * Copyright (c) 2011 Viktor Leonhardt (leonharv@unix-ag.uni-kl.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Usage:
 *
 * $('.foo').tapBox({
 * max: 100,
 * min: 0,
 * steps: 1
 * });
 *
 */

jQuery.fn.tapBox = function(options){

	settings = {
		max: 100,
		min: -100,
		'steps': 1
	};
	
	$.extend(settings, options);
  
  // create the down-button
  var downButton = $('<div/>', {'class': 'tapDown', 'style': 'cursor:pointer;'}).text('-');
  // create the up-button
  var upButton = $('<div/>', {'class': 'tapUp', 'style': 'cursor:pointer;'}).text('+');
			  
  return this.each(function(index) {
  	// save the current element
  	tapBoxElement = $(this).addClass('tapDisplay');
  	// insert the up/down-tapBox
  	$(this).before(downButton);
    $(this).after(upButton);
    
    // set event for downButton
    $('.tapDown').live('click', function(){
    	var number = parseFloat( $(this).next('.tapDisplay').val() ) - settings.steps;
    	if(number >= settings.min)
    		$(this).next('.tapDisplay').val( number );
    });
    
    // set event for upButton
    $('.tapUp').live('click', function(){
    	var number = parseFloat( $(this).prev('.tapDisplay').val() ) + settings.steps;
    	if(number <= settings.max)
    		$(this).prev('.tapDisplay').val( number );
    });
  });
}

