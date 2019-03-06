$(document).ready(function() {
  var losses = 0;

  //Creates variable for the number users will try to guess
  //and assigns it a random value between 19 and 120
  var targetNum;

  targetNum = generateNum(19, 120);
  console.log("target: " + targetNum);

  //Sets up an array to be populated by 4 randomly generated numbers
  //these numbers are assigned a value between 1 and 12
  var numOptions = [0, 1, 2, 3];
  for (i = 0; i < numOptions.length; i++) {
    numOptions[i] = Math.ceil(Math.random() * 12);
    console.log(numOptions);

    //For each of the 4 numbers, generates a crystal image and assigns each the same class
    var crystalImg = $("<img>");
    crystalImg.addClass("crystal-image");
    crystalImg.attr("src", "./assets/images/fluorite.jpg");

    //Assigns one of the 4 random numbers to each crystal
    crystalImg.attr("data-crystalvalue", numOptions[i]);
    console.log("crystal value: ", crystalImg.attr("data-crystalvalue"));

    //adds generated crystal images inside the div with id="crystals"
    $("#crystals").append(crystalImg);
  }
  //Writes the number users will guess to the div with id="number-to-guess"
  $("#number-to-guess").text(targetNum);

  var counter = 0;
  var wins = 0;
  //Each time a crystal is clicked, adds its value to a counter
  $(".crystal-image").on("click", function() {
    var value = $(this).attr("data-crystalvalue");
    value = parseInt(value);
    counter += value;
    $("#current-number").html("Current Number: " + counter);
    console.log(counter);

    //Win conditions

    if (counter === targetNum) {
      alert("Winner!");
      wins++;
      console.log(wins);
      $("#wins").html("wins: " + wins);
      counter = 0;
      //$(".crystal-image").off("click");
      newGame();
    } else if (counter > targetNum) {
      alert("Loser!");
      losses += 1;
      $("#losses").html("losses: " + losses);
      counter = 0;
      //$(".crystal-image").off("click");
      newGame();
    }
  });

  function newGame() {
    $("#new-game").on("click", function() {
      targetNum = generateNum(19, 120);

      counter = 0;
      $("#current-number").html("Current Number: " + counter);

      for (i = 0; i < numOptions.length; i++) {
        numOptions[i] = Math.ceil(Math.random() * 12);

        crystalImg.attr("data-crystalvalue", numOptions[i]);
        $("#crystals").append(crystalImg);
      }
      //Writes the number users will guess to the div with id="number-to-guess"
      $("#number-to-guess").text(targetNum);
    });
  }
});

//function to generate a random number between specified min and max values
function generateNum(min, max) {
  var randomNum;
  randomNum = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(randomNum);
  return randomNum;
}

// function resetGame() {
//   counter = 0;
//   targetNum = generateNum(19, 120);
//   console.log("new target: " + targetNum);
// }
