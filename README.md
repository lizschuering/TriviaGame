# TriviaGame

## What It Does

I created a trivia game with three different states:

1) First State: The first page the user sees when the page loads has the title of the game and a start button to begin the game.

2) Second State: The second page loads when the user presses the start button on the first page. This page will show a timer that counts backwards from 120 seconds and a set of 8 questions to answer.

3) Third State: The third and final page loads either when the user runs out of time or the user presses the submit button at the bottom of the second page. The third page displays three different counters that show how many questions were answered correctly, how many questions were answered incorrectly and how many questions were left unanswered.

## Future Directions

This was a tough assignment for me. While I was able to finally get the counters working the way I expected, the logics assumes that the user only clicks (or doesn't click) an answer one time (currently, clicking multiple times will continue to changer the amount in the counters). Refactoring is needed to make sure that only one correct or incorrect answer is registered for each question and that the counters increment and decrement only based on the *final* answer.

This game also needs to some better CSS styling. Unfortunately, I ran out of time before the assignment was due.