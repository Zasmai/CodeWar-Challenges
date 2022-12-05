// #1. Why won't this code execute?


// function multiply (a, b) {
//     a * b;
//  }


 // need to add a return statement

//  function multiply (a, b) {
//     return a * b;
//  }

//  multiply(3, 4)



 // #2.  You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

//  Write a program that returns the girl's age (0-9) as an integer.
 
//  Assume the test input string is always a valid string. For example, the test input may be "1 


// Use parse https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt


// function getAge(inputString){
//    return parseInt(inputString);
//     }

// YES!!! SOLVED ALL BY MYSELF!!!!!!!



// #3. Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// this code worked fine in the DOM but I added periods at the end of the sentences. Since they didn't match the sentences in the kata EXACTLY, the tests failed. Once I removed the periods, all test cases passed.

// function hoopCount (n) {
//     if (n >= 10) {
//         return ("Great, now move on to tricks")
//     } else {
//         (n <= 9) //not necessary
//         return ("Keep at it until you get it")
//     }
//  }

//  hoopCount (14)


 // refractord code using ternary operator but codewars comments say if/else statement is better (more clear) for troubleshooting

//  function hoopCount (n) {
//     return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
//   }





