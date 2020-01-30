$(document).ready(function(){
  
    changeWords();
    changeWordsSecond();

function changeWords() {
  var words = $("h1.heading-jumbo span");
  var i = 0;
  setInterval(function () {
      i = i < words.length - 1 ? i+1 : 0;
      $(words).removeClass("activeone");
      $(words).eq(i).addClass("activeone");
  }, 2000);
}
  
  function changeWordsSecond() {
  var words = $("h1.heading-jumbo span.second");
  var i = 0;
  setInterval(function () {
      i = i < words.length - 1 ? i+1 : 0;
      $(words).removeClass("activesecond");
      $(words).eq(i).addClass("activesecond");
  }, 4000);
}

});
