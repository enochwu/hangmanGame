window.onload = function() {

// Creating Variables
var cityAnswers = ['eureka', 'anaheim', 'bakersfield',
                'cupertino', 'pacifica', 'fremont',
                'sacramento', 'hawthorne','coronado'];
var guesses = 15;
var underScore = [];
var correct = [];
var incorrect = [];
var letterOccur = 0;
var wins;
var rand = cityAnswers[Math.floor(Math.random() * cityAnswers.length)];
var noUnderScore;

console.log(rand);

// Display "_" for unguessed word
function displayBlank () {
	for (var i = 0; i < rand.length; i++) {
		underScore.push('_');
	};
	return underScore;
}

console.log(displayBlank ());

// Checking for keypress and updating corresponding arrays
document.addEventListener('keypress', function () {
var pressedKey = String.fromCharCode(event.keyCode);
guesses --;
console.log(guesses)
//m

//Looks into value in rand (), gets index of user key press
//if key press is correct, index# will be greater than -1 - first block executes.
//if key press is wrong, index# will be -1 - second block executes. Jimmy 01234
	if (rand.indexOf(pressedKey) > -1) {
	//if (rand.indexOf(m) > -1) {
	//if (2 > -1) {

		//correct is variable containing the array that stores underscores "_ _ _ _"
		//push will commit a change to a underscore with the correct keypress
		// correct.push(pressedKey);

		//if i=0 and i is less than the length of rand "jimmy" then
		// if rand0 === j commit a change to array correct (replace underscore) at index 0
		// Repeat i=1

				//01234
				//Jimmy
				// Correct Guess
			for (var i=0; i<rand.length;i++) {
					// 	i				===	j	then
					if (rand[i] === pressedKey) {
						//				=	_ _ _ _ _ _ random.indexOf(J) = 0
						//stored = [0]
						correct.push(i);
						console.log (pressedKey)

					}
					letterOccur = correct.length;
				}
				console.log(correct)

			for (var i = 0; i < letterOccur; i++) {
					// 				2			= correct [0]
					var correctIndex = correct[i]
					underScore[correctIndex] = pressedKey
					console.log(pressedKey)
					console.log(underScore)
				}
				correct = [];
			}
	// Wrap win condition somehow


	// Incorrect Guess
		else if (guesses > 0){
		  incorrect.push(pressedKey);
		  console.log(incorrect);
		}

		if (guesses < 1) {
				window.alert('Game over!')
				window.location.reload();
		}

		//convert array to comma separated string
		rawRightText = underScore.toString()
		rawWrongText = incorrect.toString()
		//take the variable with string, and replace commas with spaces, clean up
		prettyRightText = rawRightText.replace(/,/g, " ")
		prettyWrongText = rawWrongText.replace(/,/g, ", ")

		prettyRightText = prettyRightText.toUpperCase();
		prettyWrongText = prettyWrongText.toUpperCase();

    document.getElementById("wordToSolve").innerHTML= prettyRightText;
    document.getElementById("guessCounter").innerHTML= guesses;
    document.getElementById("wrongKeys").innerHTML= prettyWrongText;
    noUnderScore = prettyRightText.indexOf('_');
		console.log(prettyRightText)
		console.log(prettyWrongText)
    console.log(noUnderScore)

    if ((guesses > 0) && (noUnderScore < 0)) {
      window.alert('You have solved the puzzle!')
      window.location.reload();
    }
	});
};
