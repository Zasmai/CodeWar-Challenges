
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



// function removeChar(str) {
//     return str.slice(1, -1);
//   }


// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.


    class SmallestIntegerFinder {
        findSmallestInt(args) {
          return Math.min(...args)
        }
      }


      class SmallestIntegerFinder {
        findSmallestInt(args) {
          return Math.min.apply(null, args);
        }
      }

      class SmallestIntegerFinder {
        findSmallestInt(args) {
          args.sort(function(a, b) {
          return a - b; } )
          return args[0];
        }
      }