$( document ).ready(function() {
    //Constantly update Type Chart
   setInterval(function(){update();}, 100);

    //Fix sizing on top row
    $(window).on('resize', function(){
          fix();
    });
    fix();
});