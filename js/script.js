$(document).ready(function(){
	 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        setTimeout(function(){
        	$(window).resize()
        },500)
    });
	 $('#page-content-wrapper').click(function(){
		if($(window).width()<768){
			$("#wrapper").removeClass("toggled");
		}
	});
	 $('body').on('click','.trigger',function() {
	    $(this).parents(".menu").toggleClass("active"); 
	    if($(".menu").hasClass('active')){
	    	$("body").addClass("lightoverlay"); 
	    }else{
	    	$("body").removeClass("lightoverlay"); 
	    }
	  });

	$( ".draggable" ).draggable({ appendTo: "body", 
		helper: 'clone',
        start: function (event, ui) {
            $(this).hide();
        },
        stop: function (event, ui) {
            $(this).show();
        }
	});

    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
      	$(this).parent('.custompricedrop-outerring').addClass('dropped');
        $( this ).find('.custompricecontent').show();
          // .addClass( "ui-state-highlight" )
          // .find( "p" )
          //   .html( "Dropped!" );
      }
    });

    $('#incQuantity').click(function(){
    	if($('#quantity').val() == ''){
    		$('#quantity').val(0);
    	}else{
    		var quantityval= $('#quantity').val();
    		quantityval++;
    		$('#quantity').val(quantityval);
    	}
    });
    $('#decQuantity').click(function(){
    	if($('#quantity').val() == ''){
    		$('#quantity').val(0);
    	}else{
    		var quantityval= $('#quantity').val();
    		quantityval--;
    		if(quantityval < 0){
	    		return false;
	    	}
    		$('#quantity').val(quantityval);
    	}
    });









    $("#sidebar-wrapper").niceScroll({
		cursorborder: "1px solid transparent",
		cursorcolor: "rgba(0,0,0,.3)",
		cursorwidth: "7px",
		cursorfixedheight: "250"
	});
});