// function opposite(number) {
//     var result = -1 * number;
//      return result;
//    }

// const opposite = number => -number;

function opposite(number) {
    return number > 0 ? -number : Math.abs(number);
  }
