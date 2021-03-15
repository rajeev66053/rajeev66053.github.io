init = function() {
    var puzzleArea = $('#puzzlearea');
    var divs = puzzleArea.children("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs.eq(i);
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.addClass("puzzlepiece");
        div.css({left: x + "px"});;
        div.css({top: y + "px"});
        div.css("background-image",'url("../../images/background.jpg")');
        div.css("background-position",-x + "px " + (-y) + "px");
        
        // store x and y for later
        // div.x = x;
        // div.y = y; 

        console.log(x,y);
    }        
};
$(document).ready(function(){
    init();
});
