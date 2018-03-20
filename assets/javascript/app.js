// Create the iniital state: Page displays the game title and a start button. 

// Create variables to hold the correct, incorrect and unanswered counts for each question. These will be tallied up in the counters that will appear on the last page of the game.

var q1correct = 0;
var q1incorrect = 0;

var q2correct = 0;
var q2incorrect = 0;

var q3correct = 0;
var q3incorrect = 0;

var q4correct = 0;
var q4incorrect = 0;

var q5correct = 0;
var q5incorrect = 0;

var q6correct = 0;
var q6incorrect = 0;

var q7correct = 0;
var q7incorrect = 0;

var q8correct = 0;
var q8incorrect = 0;

var unanswered = 8;

// This shows the image and button for the start of the game

function beginGame () { 
    $(".gameImage").prepend($("<img>").attr("src", "./assets/images/btfflogo.png"));

    var startButton = $("<button>" + "START" + "</button>");
    startButton.attr("id", "startButton")
    $(".buttonOne").append(startButton);
    
    $(".questions").hide();

    $(".endGame").hide();
}

beginGame(); // Calling the function to display the initial state.

// State Change: A event that registeres the user clicking on the start button so that they are taken to the next page which will display the timer and trivia questions.

$("#startButton").on("click", function(){
    $(".beginGame").empty();
    playGame()
})

// Create the second state: Page displays the timer and the trivia questions.
// At the top is a countdown timer. It starts at a specified time and counts backwards to zero.
// Below the countdown timer are all of the questions.

function playGame () {
    
    var timer = 121;
    $(".timer").attr("id", "countDownTimer");

    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease the timer by one.
      timer--;

      $(".timer").html("Time Remaining: " + timer + " seconds");


      //  When the timer reaches zero
      if (timer === 0) {
        stop();
        $(".playGame").empty();
        endGame();
      }
    }

    //  The stop function
    function stop() {
      clearInterval(intervalId);
    }

    run();

    // Displays the questions in the questions div only when the game begins and not beforehand.
    $(".questions").show();

    // Listening for whether the user is selecting correct or incorrect answers.
    $("input[name=q1]").on ("click", function () {
      unanswered--;
      if ($("input[name=q1][value=correct]").is(':checked')) { 
        q1correct = 1;
      }  
      else if ($("input[name=q1][value=incorrect]").is(':checked')) {
        q1incorrect = 1;
      }
    });

    $("input[name=q2]").on ("click", function () {
      unanswered--;
      if ($("input[name=q2][value=correct]").is(':checked')) { 
        q2correct = 1;
      }  
      else if ($("input[name=q2][value=incorrect]").is(':checked')) {
        q2incorrect = 1;
      }
    });

    $("input[name=q3]").on ("click", function () {
      unanswered--;
      if ($("input[name=q3][value=correct]").is(':checked')) { 
        q3correct = 1;
      }  
      else if ($("input[name=q3][value=incorrect]").is(':checked')) {
        q3incorrect = 1;
      } 
    });

    $("input[name=q4]").on ("click", function () {
      unanswered--;
      if ($("input[name=q4][value=correct]").is(':checked')) { 
        q4correct = 1;
      }  
      else if ($("input[name=q4][value=incorrect]").is(':checked')) {
        q4incorrect = 1;
      }
    });

    $("input[name=q5]").on ("click", function () {
      unanswered--;
      if ($("input[name=q5][value=correct]").is(':checked')) { 
        q5correct = 1;
      }  
      else if ($("input[name=q5][value=incorrect]").is(':checked')) {
        q5incorrect = 1;
      }
    });

    $("input[name=q6]").on ("click", function () {
      unanswered--;
      if ($("input[name=q6][value=correct]").is(':checked')) { 
        q6correct = 1;
      }  
      else if ($("input[name=q6][value=incorrect]").is(':checked')) {
        q6incorrect = 1;
      }
    });

    $("input[name=q7]").on ("click", function () {
      unanswered--;
      if ($("input[name=q7][value=correct]").is(':checked')) { 
        q7correct = 1;
      }  
      else if ($("input[name=q7][value=incorrect]").is(':checked')) {
        q7incorrect = 1;
      }
    });

    $("input[name=q8]").on ("click", function () {
      unanswered--;
      if ($("input[name=q8][value=correct]").is(':checked')) { 
        q8correct = 1;
      }  
      else if ($("input[name=q8][value=incorrect]").is(':checked')) {
        q8incorrect = 1;
      }
    });

    // Button to submit answers when the user doesn't run out of time.
    var submitButton = $("<button>" + "SUBMIT" + "</button>");
    submitButton.attr("id", "submitButton")
    $(".buttonTwo").append(submitButton);

    $("#submitButton").on("click", function(){
      $(".playGame").empty();
      endGame()
    })
}

function endGame () {
  $(".questions").hide();

  $(".endGame").show();

  // Display the counters at the end of the game
  var correct = q1correct + q2correct + q3correct + q4correct + q5correct + q6correct + q7correct + q8correct;
  
  var incorrect = q1incorrect + q2incorrect + q3incorrect + q4incorrect + q5incorrect + q6incorrect + q7incorrect + q8incorrect;

  $(".correct").html("Correct Answers: " + correct);
 
  $(".incorrect").html("Incorrect Answers: " + incorrect);

  $(".unanswered").html("Unanswered Questions: " + unanswered);
}