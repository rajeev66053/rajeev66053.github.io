$( document ).ready(function() {
  var gameStart = false;
  $("#maze .boundary").mouseover(function(){
    if(gameStart){
      $("#maze .boundary").addClass("youlose");
      $("#status").text("You lose!");
    }
  });

  $("#maze").mouseleave(function(){
    if(gameStart){
      $("#maze .boundary").addClass("youlose");
      $("#status").text("You lose.");
    }
  });

  $("#start").click(function(){
    gameStart=true;
    $(".boundary").removeClass("youlose");
    $("#status").text("Game On!");
  });

  $("#end").mouseover(function(){ 
    gameStart=false;   
    $("#status").text("You win!");
  });

});