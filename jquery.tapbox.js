jQuery.fn.tapBox = function(options){
  
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
    	$(this).next('.tapDisplay').val( parseInt( $(this).next('.tapDisplay').val() ) - 1 );
    });
    
    // set event for upButton
    $('.tapUp').live('click', function(){
    	$(this).prev('.tapDisplay').val( parseInt( $(this).prev('.tapDisplay').val() ) + 1 );
    });
  });
}

