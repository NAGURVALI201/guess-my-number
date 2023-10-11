'use strict';

/*
// To select a particular tag using selector and textContent to get its textual data
console.log(document.querySelector('.message').textContent);
// for the all the tag that have text for number value the attribute is textContent
// actually we can change the value of the text field.
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 19;

// for the input tag the attribute is value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*

// ------------------- guessing a number --------------------------

// you can directly pass the ananymous function or just give name of function to js engine will call when mouse is clicked.

// Random method generates a number between 0 and 1 and 1 is excluded.
// If we want a number between 0 and 20 just multiply by 20
// And we get the decimal and 20 is excluded in the result
// Output like 19.99 decimal we can trunc which will strip the decimal value and get to floor value 19
// if we want to get result in upto 20 we just need to add 1 to the result.

const randomNumber = function () {
  // generates a random number.
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  // display a message whether correct , too high or low.
  document.querySelector('.message').textContent = message;
};

let secretNumber = randomNumber();

// lets declare a score variable which will keep track of score in the game.
let score = 20;
// declaring the highscore it is only possible the we use the again button if we reload the page it will become 0
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent = '🎉 Correct Number';
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if we dont enter any number the input filed return zero

  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number !!!';
    displayMessage('🚫 No Number !!!');
  }
  // when we guess the correct number.
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    // after guessing the correct number will should reveal the answer
    document.querySelector('.number').textContent = secretNumber;
    // when its is correct guess we should change the background color of body and then in width of the number.
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    // setting up the high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // if the number is not equal to guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '☝ Too high !!!' : '👇 Too low !!!';
      //   score--;
      displayMessage(
        guess > secretNumber ? '☝ Too high !!!' : '👇 Too low !!!'
      );

      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     '🤯 You lost the game.!!!!!';
      displayMessage('🤯 You lost the game.!!!!!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
  //   // when the number is too high.
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '☝ Too high !!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '🤯 You lost the game.!!!!!';
  //       score = 0;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
  //   // when the number is too low.
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '👇 Too low !!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '🤯 You lost the game.!!!!!';
  //       score = 0;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
});
// again button functionality
// 1.select the button with the again class and add listening functinality
// 2.In the function restore the intial values of score and numbers values.
// 3.Restore the initial conditions of message,number,score and guess field values.
// 4.Also restore the original background color with (#222) and the width to '15rem'.

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  // restoring conditions of the pages
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...'); // in similar way we should make our code look clean.
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // restoring backgroundcolor and width of number field
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
// console.log(secretNumber);

*/
