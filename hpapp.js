$(document).ready(function(){

function changeWords() {
  var words = $("h1.heading-jumbo span");
  var i = 0;
  setInterval(function () {
      i = i < words.length - 1 ? i+1 : 0;
      $(words).removeClass("active");
      $(words).eq(i).addClass("active");
  }, 2000);
}

});
