// Description:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
    // the split method returns a new array containing each character in the string
      return str.split("").reverse().join("");
  // the reverse method creates the new array
  // the join method joins all of the new elements into a new string
  }
  console.log(solution("hello there"))


// Using ternary operator
  function solution(str) {
    return (str === '') ? '' : solution(str.substr(1)) + str.charAt(0);
  }
  console.log(solution("Hello World"));


  const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
  
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, and ${this.xp} as experience points.`;
    }
  };
  
  // aurora.xp = 0;
  
  // Aurora is harmed by an arrow
  aurora.health -= 20;
  
  // Aurora equips a strength necklace
  aurora.strength += 10;
  
  // Aurora learn a new skill
  aurora.xp += 15;
  
  console.log(aurora.describe());