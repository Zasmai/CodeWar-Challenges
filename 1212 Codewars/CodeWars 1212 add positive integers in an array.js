const arr = [-3, -2, 0, 3, 5, 2]

function positiveSum(arr) {
    let newSum = 0;
    for ( i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        newSum += arr[i];
        
      }
    }
    return newSum;
  }
  console.log(positiveSum(arr))


  function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }
  