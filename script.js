
function highlight() {
    //Write your code here
  var boldWords = document.querySelectorAll('strong')
  boldWords.forEach(function(word) {
    word.style.color = 'green';
  });
}
function return_normal() {
   var boldWords = document.querySelectorAll('strong')
  boldWords.forEach(function(word) {
    word.style.color = 'black';
  });
}


    


