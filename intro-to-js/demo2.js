

// The if statement

// var age = parseInt(prompt("How old are you? "))

// if (age === 18) { // Condition, MUST BE A BOOLEAN (TRUE/FALSE)
//     alert("Yay you are an adult") // execute this code if true
// } else if (age < 18) {
//     alert("You can not vote!") // execute this code if false
// } else {
//     alert("you can vote");
// }


// The Switch Statement (Replacement for if / elseif / else )
// var age = 18
// switch (age) {
//     case age === 18:
//       alert("Remember to bring an umbrella.");
//       break;
//     case "sunny":
//         alert("Dress lightly.");
//     case "cloudy":
//         alert("Go outside.");
//       break;
//     default:
//         alert("Unknown weather type!");
//       break;
//   }


// Scope

// Outside of the block
// if (true) { // Start of the code block
//     var myVar = "nick";
//     console.log(myVar);
//     // Inside of the block
// } 
// console.log(myVar);
// Outside of the block



// The for loop

// let num = parseInt(prompt("Please enter a number"))

// for (let i = 1 ; i <= num ; i++) {
//     document.writeln(i);
// }

// The while loop

// let computer = Math.floor(Math.random() * 10) + 1;
// let guess = parseInt(prompt("Please guess a number between 1 and 10"));
// while (guess !== computer) {
//     guess = parseInt(prompt("Wrong! Guess Again!"));
// }
// alert("You Got it!")

// The Break Statement in a loop

for (let current = 10; ; current++) {
    if (current % 7 === 0) {
      console.log(current);
      break;
    }
  }
