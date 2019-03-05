$(document).ready(function() {
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

    //adds generated crystal images inside the div with id="crystals"
    $("#crystals").append(crystalImg);
  }
  //Writes the number users will guess to the div with id="number-to-guess"
  $("#number-to-guess").text(targetNum);
});

//function to generate a random number between specified min and max values
function generateNum(min, max) {
  var randomNum;
  randomNum = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(randomNum);
  return randomNum;
}
