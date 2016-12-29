
(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var index in names) {
      var i = names[index].charAt();
    if (i.toLowerCase() === 'j') {
        byeSpeaker.speak(names[index]);
      } else {
        helloSpeaker.speak(names[index]);
  }
}

})();



