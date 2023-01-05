// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const str = "abracadabra";
function getCount(str) {
    let vowelCount = 0; //create variable
    const vowels = ["a", "e", "i", "o", "u"] // create vowel array
    for (let char of str) { // look at every character in the string to see if it's a vowel
        if (vowels.includes(char)) { // check if the array includes a vowel
            vowelCount++ // increase vowelsCount if the character is a vowel
        }
    }
    return vowelCount;
  }
  console.log(getCount(str))
