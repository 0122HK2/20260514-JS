$(function() {
  // jQueryを記述
  $("p").click(function(){
    $(this).fadeOut(3000, function(){
      alert("フェードアウトしました")
    });
  });
});