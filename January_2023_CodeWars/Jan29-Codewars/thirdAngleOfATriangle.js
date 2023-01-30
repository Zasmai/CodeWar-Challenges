<<<<<<< HEAD
// P - the paramaters are a, b. the known angles of a triangle. use otherAngle to find the answer
// R - return a the equation for otherAngle
// E - assert.strictEqual(otherAngle(30, 60), 90);
// P - we know that 180 - a + b will give us the third angle and thus the answer. 

function otherAngle(a, b) {
  let otherAngle = 180 - (a + b);
  return otherAngle;
=======
// P - the paramaters are a, b. the known angles of a triangle. use otherAngle to find the answer
// R - return a the equation for otherAngle
// E - assert.strictEqual(otherAngle(30, 60), 90);
// P - we know that 180 - a + b will give us the third angle and thus the answer. 

function otherAngle(a, b) {
  let otherAngle = 180 - (a + b);
  return otherAngle;
>>>>>>> 30396dead764932271ed6aa840460f969806d6e7
}