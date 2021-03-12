$( document ).ready(function() {
  var gameStart = false;
  $("#maze .boundary").mouseover(function(){
    if(gameStart){
      $("#maze .boundary").addClass("youlose");
      $("#status").text("You lose!");
      gameStart=false;
    }
  });

  $("#maze").mouseleave(function(){
    if(gameStart){
      $("#maze .boundary").addClass("youlose");
      $("#status").text("You lose.");
      gameStart=false;
    }
  });

  $("#start").mouseover(function(){
    $(this).css("cursor","pointer");
  });


  $("#start").click(function(){
    gameStart=true;
    $(".boundary").removeClass("youlose");
    $("#status").text("Game On!");
  });

  $("#end").mouseover(function(){ 
    $(this).css("cursor","pointer");
    if(gameStart){
      $("#status").text("You win!");
      gameStart=false;
    } 
  });

});