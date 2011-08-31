jQuery.fn.tapBox = function(options){

	settings = {
		max: 100,
		min: -100,
		'steps': 1,
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

