$(function() {
  // jQueryを記述
  // $("p").fadeIn(3000);

  $("p").fadeIn(function(){
    $(this).css("color", "#f00");
  });
});