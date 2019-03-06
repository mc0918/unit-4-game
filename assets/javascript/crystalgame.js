$(document).ready(function() {
  var randomNum = generateNum(19, 120);
  $("#number-to-guess").text(randomNum);

  crystalNums();

  wins = 0;
  losses = 0;
  counter = 0;
  crystalClick(wins, losses, counter, randomNum);
});

function generateNum(min, max) {
  var randomNum;
  randomNum = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNum;
}

function crystalNums() {
  $("#crystals").empty();

  var numOptions = [0, 1, 2, 3];
  for (i = 0; i < numOptions.length; i++) {
    numOptions[i] = Math.ceil(Math.random() * 12);

    var crystalImg = $("<img>");
    crystalImg.addClass("crystal-image");
    crystalImg.attr("src", "./assets/images/fluorite.jpg");

    crystalImg.attr("data-crystalvalue", numOptions[i]);
    console.log("crystal value: ", crystalImg.attr("data-crystalvalue"));

    $("#crystals").append(crystalImg);
  }
}

function crystalClick(wins, losses, counter, randomNum) {
  $(".crystal-image").on("click", function() {
    console.log("clicked!");
    var value = $(this).attr("data-crystalvalue");
    value = parseInt(value);
    counter += value;
    $("#current-number").html("Current Number: " + counter);
    console.log(counter);

    //Win conditions

    if (counter === randomNum) {
      alert("Winner!");
      wins++;
      console.log(wins);
      $("#win-count").html(wins);
      counter = 0;
      newGame();
    } else if (counter > randomNum) {
      alert("Loser!");
      losses++;
      $("#loss-count").html(losses);
      counter = 0;
      newGame();
    }
  });
}

function newGame() {
  $("#new-game").on("click", function() {
    var randomNum = generateNum(19, 120);
    $("#number-to-guess").text(randomNum);
    crystalNums();

    wins = $("#win-count").text();
    console.log(wins);
    losses = $("#loss-count").text();
    console.log(losses);
    counter = 0;
    $("#current-number").html("Current Number: " + counter);

    crystalClick(wins, losses, counter, randomNum);
  });
}
