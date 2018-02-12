$(document).ready(function(){

  // dont do this -> Bad times!!!
  $("#bruce-pic").css('border-radius', '2px');
  $("#bruce-pic").css('border', 'darkgrey 3px solid');
  $("#bruce-pic").css('margin-left', '20px');

  $(".hidden-start").hide();

  $("#title-text")
  .on( "mouseenter", function() {
      $(this).text("...My Friend");
  })
  .on( "mouseleave", function() {
       $(this).text("Be Water...");
  });

  $("#empty")
  .on( "mouseenter", function() {
    $(this).css('background-color', 'aliceblue');
  }).on( "mouseleave", function() {
    $(this).css('background-color', 'white');
  });

  $("#empty").click(function(){
    $("#cup").show().fadeOut(6500);
  })

  $("#cup").click(function(){
    $("#crash").show().fadeOut(6500);
  })
})
