<<<<<<< HEAD
//PREP
// Paramaters - array of booleans/true or false
// return - the # of sheep present in the array - number of trues
// example - [true, true, false, true, true] ---> 4
// there are 5 elements in the array so length = 5 but the index of the last element is 4. 
// pseudocode - can create a for loop using .length or find method using an array to find

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    
    let totalSheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] == true) {
        totalSheep += 1;
      } else {
        continue;
      }
    } 
    return totalSheep;
=======
//PREP
// Paramaters - array of booleans/true or false
// return - the # of sheep present in the array - number of trues
// example - [true, true, false, true, true] ---> 4
// there are 5 elements in the array so length = 5 but the index of the last element is 4. 
// pseudocode - can create a for loop using .length or find method using an array to find

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    
    let totalSheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] == true) {
        totalSheep += 1;
      } else {
        continue;
      }
    } 
    return totalSheep;
>>>>>>> 30396dead764932271ed6aa840460f969806d6e7
  }