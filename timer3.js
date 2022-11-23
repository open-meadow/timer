const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

// const repeatedlyAskQuestion = () => {
//   rl.question("Input 'b' and enter to beep right away. Or press a number from 1-9 and beep in that many seconds: ", (answer) => {

//     process.on('exit', function () {
//       console.log("Thanks for using me, ciao!")
//       process.exit();
//     });   // '\u000c' not working. This only works after beep, not first time. Found here (https://stackoverflow.com/questions/9199105/handling-ctrlc-event-in-node-js-on-windows).

//     // process.stdin.read('b', b => {
//     //   process.stdout.write('\x07');
//     //   process.stdout.write("beep \n");
//     // });

//     if (answer === 'b') {
//       process.stdout.write('\x07');
//       process.stdout.write("beep \n");
//     } else {
//       answer = Number(answer);
//       // console.log(answer, typeof (answer));

//       if (answer >= 1 && answer <= 9) {
//         console.log("Setting timer for " + answer + " seconds");

//         setTimeout(() => {
//           process.stdout.write('\x07');
//           process.stdout.write("numBeep \n");
//         }, (answer * 1000));

//         // repeatedlyAskQuestion();
//       } else {
//         console.log("Invalid input. Try again");
//         // repeatedlyAskQuestion();
//       }
//     }

//     repeatedlyAskQuestion(); // solution found here: https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js


//   });
// }

// repeatedlyAskQuestion();

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

console.log("Press b to beep immediately, and a number from 1 - 9 to beep in that many seconds");

stdin.on('data', (answer) => {

  if (answer === 'b') {
    process.stdout.write('\x07');
    process.stdout.write("beep \n");
  } else {
    answer = Number(answer);
    // console.log(answer, typeof (answer));

    if (answer >= 1 && answer <= 9) {
      console.log("Setting timer for " + answer + " seconds");

      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write("numBeep \n");
      }, (answer * 1000));

      // repeatedlyAskQuestion();
    } else {
      console.log("Invalid input. Try again");
      // repeatedlyAskQuestion();
    }
  }

});

console.log('after callback');
