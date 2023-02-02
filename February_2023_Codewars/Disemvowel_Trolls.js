// P - given a string and remove vowels
// R - the string without vowels
// E - "This website is for losers LOL!"), "Ths wbst s fr lsrs LL!"
// P - /[aeiouyAEIOUY]/gi use a global method to call out individual vowels and remove them. need to remove upper and lower case letters. 

function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/gi,"")
  }