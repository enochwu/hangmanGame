var cityChoices = ["Eureka", "Anaheim", "Bakersfield", "Cupertino", "Pacifica", "Fremont", "Sacramento", "Hawthorne","Coronado"];

var winCounter = 0;

var typedKeys = document.getElementById("typedKeys");

      document.onkeyup = function(event) {
        typedKeys.textContent = event.key;
        var arr = [];
        arr.push(typedKeys);
      };

