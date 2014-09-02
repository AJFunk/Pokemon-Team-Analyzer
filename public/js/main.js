$( document ).ready(function() {
    //Constantly update Type Chart
   setInterval(function(){update();}, 100);
   /*$(document).on("keypress", function (e) {
    	update();
	});

   $(document).on("click", function (e) {
    	update();
	});*/

    //Fix sizing on top row
    $(window).on('resize', function(){
          fix();
    });
    fix();
});