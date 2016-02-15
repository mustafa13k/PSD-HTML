$(document).ready(function() {
	$("#portfolio-sorting li a").on('click',function(){
		// Remove the current active class
		$("#portfolio-sorting li a.active").removeClass('active');
		//Make the selected link as active
		$(this).addClass('active');

		var filterValue = 'cat-' + $(this).text().toLowerCase().replace(' ','-');
		//console.log(filterValue);
		if(filterValue == "cat-all"){
				$(".portfolio-entry").removeClass('hide-entry');
		}else{
				$(".portfolio-entry").each(function(index, el) {
					if(!$(this).hasClass(filterValue)){
						$(this).addClass('hide-entry');
					}else{
						$(this).removeClass('hide-entry');
					}
				});
		}

		return false;
	});

});	