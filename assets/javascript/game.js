$(document).ready(function(){

var randomNumber;
var playersScore = 0;
var winningGames = 0;
var losingGames = 0;
var yellowCrystal;
var redCrystal;
var orangeCrystal;
var purpleCrystal;




function randomNumber () {
		randomNumber = Math.floor((Math.random() * 120) + 19);
		$('#random-number').append(randomNumber);
		winsDiv = $('<div>');
		$('.game-counter').append(winsDiv);
		winsDiv.text('Wins: ' + winningGames);
		lossesDiv = $('<div>');
		$('.game-counter').append(lossesDiv);
		lossesDiv.text('Losses: ' + losingGames);
};

function yellowValue () {
	yellowCrystal = Math.floor((Math.random() * 12) + 1);
	$('yellow-crystal').attr(yellowCrystal);
	console.log(yellowCrystal);
	$('#yellow-crystal').click(function(){
		playersScore = playersScore + yellowCrystal;
		console.log(playersScore);
		score();
	});
}

function redValue () {
	redCrystal = Math.floor((Math.random() * 12) + 1);
	$('red-crystal').attr(redCrystal);
	console.log(redCrystal);
	$('#red-crystal').click(function(){
	playersScore = playersScore + redCrystal;
	console.log(playersScore);
	score();
	});
}

function orangeValue () {
	orangeCrystal = Math.floor((Math.random() * 12) + 1);
	$('orange-crystal').attr(orangeCrystal);
	console.log(orangeCrystal);
	$('#orange-crystal').click(function(){
	playersScore = playersScore + orangeCrystal;
	console.log(playersScore);
	score();
	});
}

function purpleValue () {
	purpleCrystal = Math.floor((Math.random() * 12) + 1);
	$('purple-crystal').attr(purpleCrystal);
	console.log(purpleCrystal);
	$('#purple-crystal').click(function(){
	playersScore = playersScore + purpleCrystal;
	console.log(playersScore);
	score();
	});
}


randomNumber();
yellowValue();
redValue();
orangeValue();
purpleValue();


function score () {
	$('.user-score').text(playersScore);
	
	if (playersScore === randomNumber) {
		$('.user-score').append(winnerDiv);
		winnerDiv.text('You Won!');
		winningGames++;
		setTimeout(refresh, 1000 * 5);
	}

	if (playersScore > randomNumber) {
		$('.user-score').append('You Lost!');
		losingGames++;
		setTimeout(refresh, 1000 * 2);
	}
};


// $('.crystal').click(function(){
// 	var crystalClick = parseInt($(this).attr('.crystal'));
// 	console.log(crystalClick);
// 	playersScore = playersScore + $(this).attr('.crystal');
// 	$('.user-score').text(playersScore);
// 	console.log(playersScore);
// 	if (playersScore === randomNumber) {
// 		$('.user-score').append(winnerDiv);
// 		winnerDiv.text('You Won!');
// 		winningGames++;
// 		setTimeout(refresh, 1000 * 5);
// 	}

// 	if (playersScore > randomNumber) {
// 		$('.user-score').append('You Lost!');
// 		losingGames++;
// 		setTimeout(refresh, 1000 * 5);
// 	}
// })

function refresh () {
	$('.user-score').empty();
	randomNumber();
	yellowValue();
	redValue();
}



})


// don't append, use attr that track the value of the crystal
 // $('#yellow-crystal').on('click', function() {
 //    $('.user-score').attr(yellowCrystal);
 //    console.log(yellowCrystal);
 //      })

 // $('#red-crystal').on('click', function() {
	// 	crystalClick = Math.floor((Math.random() * 12) + 1);
	// 	console.log(crystalClick);
	// 	$('red-crystal').attr(crystalClick);
 //      })

 //  $('#orange-crystal').on('click', function() {
	// 	crystalClick = Math.floor((Math.random() * 12) + 1);
	// 	console.log(crystalClick);
	// 	$('orange-crystal').attr(crystalClick);
 //      })

 //   $('#purple-crystal').on('click', function() {
	// 	crystalClick = Math.floor((Math.random() * 12) + 1);
	// 	console.log(crystalClick);
	// 	$('purple-crystal').attr(crystalClick);
 //      })





