// Episode 1 //

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Episode 1 will show the string interpolation on line 10 as a result because each const is within the
// same scope and therefore they are all visible to each other


// Episode 2 //

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// This will throw an error. Line 22 uses 'const' which means the variable 'murderer' cannot be changed.
// the subsequent function will not work because it tries to change a constant and causes an error

// Episode 3 //


// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// //
// // This will return First Verdit: Mrs. Peacock and Second Verdict: Professor Plum because the function
// // declareMurderer changes the value of the variable 'murderer' but this is only visible within the scope
// // of the function declareMurderer. The secondVerdict will use the variable 'murderer' on line 42 because
// // the original 'murderer' variable is within the scope of secondVerdict

// Episode 4 //

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// // Line 72 will print 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard' because the function
// declareAllSuspects changes the variable suspectThree, and therefore is visible within its scope, when called
// it will show the return statement written within the function. The console.log on line 73 will show 'Suspect
// three is Mrs Peacock' because it has the same scope as the let on line 64.

// Episode 5


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
//
// Line 99 will return 'The weapon is the revolver' because the first function on line 89 changes the weapon
// value to what is passed through the parameter 'newWeapon', which is later called and changed with the argument
// 'revolver'. The function on line 93 will use string interpolation to call 'the weapon is the revolver',
//  which is then shown via line 99.

// Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//
// This will return "The murderer is Mrs White" because the function plotTwist is is declared inside changeMurderer
// and changes the murderer to Mrs White. However, this function is not initially within the scope of
// changeMurderer function UNTIL plotTwist function is called within the function changeMurderer, but outide
// the curly brackets of the function plotTwist. They then have the same scope. Once its called within
// declareMurderer and then stored in the variable 'verdict' means it will be shown by line 126

// Episode 7
//

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer2 = 'Colonel Mustard';
//     console.log(murderer2)
//     const unexpectedOutcome = function() {
//       murderer2 = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//     console.log(murderer2)
//   }
//
//   plotTwist();
//   console.log(murderer2)
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//
// There are two different variables at play - both confusingly called murderer. The murderer variable
// on line 140 has a different scope than the murderer variable on line 143. When it is declared again,
// it's almost like a new thing (this I realized through multiple console.log statements). The declareMurderer
// function has the same scope as the murderer variable on line 140.


// Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

  const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

There are two functions nested within the changeScenario function. unexpectedOutcome is nested within
plotTwist.
changeScenario is run first, which changes murderer and room.
Next, plotTwist is called on line 197 with the argument dining room which changes murderer to Colonel Mustard.
This runs the plotTwist function, which in turn runs unexpectedOutcome nested inside it.
unexpectedOutcome is run on line 194, which changes weapon to 'candle stick'
Then lines 204 - 206 are run and return 'the weapon is candle stick'

// #### Episode 9
//
// ```js
// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
// ```
//
// ### Extensions
//
// Make up your own episode!
