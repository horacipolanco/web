$(document).ready(function(){
  
    changeWords();
    changeWordsSecond();

function changeWords() {
  var words = $("h1.heading-jumbo span.one");
  var i = 0;
  setInterval(function () {
      i = i < words.length - 1 ? i+1 : 0;
      $(words).removeClass("activeone");
      $(words).eq(i).addClass("activeone");
  }, 1500);
}
  
  function changeWordsSecond() {
  var wordssecond = $("h1.heading-jumbo span.second");
  var i = 0;
  setInterval(function () {
      i = i < wordssecond.length - 1 ? i+1 : 0;
      $(wordssecond).removeClass("activesecond");
      $(wordssecond).eq(i).addClass("activesecond");
  }, 2000);
}

});
