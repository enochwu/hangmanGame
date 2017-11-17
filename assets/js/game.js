


//JavaScript document
// var answer = new Array('h', 'a', 'n', 'g', 'm', 'a', 'n');
// var letters = new Array("a", "b ", "c ", "d ", "e ", "f ", "g ", 'h', "i ", "j ", "k ", "l ", "m ", "n ", "o ", "p ", "q " ,"r " ,"s ", "t ", "u ", "v ", "w ", "y ", "x "); 

// onload = init;
// function init(){
//     updateDisplay();
// document.getElementById("guess_button").onclick= 
// function(){
//     enter();
//  }
// }
// function enter(){
//     var list1 = "";
//     var letter = document.getElementById("guess_text").value
//     var box = document.getElementsByClassName("answer_char")
//     if(letter == answer){
//     for (var i = 0; i < answer.length; i++) {
//         for(var j = 0; j < box.length; j++){
//               if(answer[i] == box[j]) {
//                       list1+= letter
//                   }
//               }
//             box[j].innerHTML = list1
//         }

//  }
//  }

// function updateDisplay(){
//     var list = " ";
//   for(var i = 0; i < letters.length; i++){
//         list += letters[i]
//     }
// document.getElementById("letter_pool").innerHTML = list
// }



// var typedKeys = document.getElementById("typedKeys");

//       document.onkeyup = function(event) {
//         typedKeys.textContent = event.key;

//       };

// for (var i = 0; i < cityAnswers.length; i++) {
//   Things[i]
// }

var cityAnswers = ["Eureka", "Anaheim", "Bakersfield", "Cupertino", "Pacifica", "Fremont", "Sacramento", "Hawthorne","Coronado"];
var winCounter = 0;

//Get and store Letter guess
document.onkeyup = function() {

      var citySelection = cityAnswers[Math.floor(Math.random()*cityAnswers.length)];
      console.log(citySelection);

      var letterguess = String.fromCharCode(event.keyCode).toUpperCase();
      console.log(letterguess);
    }

// var arr = [];
// arr.push(typedKeys);