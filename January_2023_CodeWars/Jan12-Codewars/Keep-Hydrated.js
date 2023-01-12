function litres(time) {
  return Math.floor(time * 0.5)
}
console.log(litres(11.8))

// learning to use the correct methods under the proper circumstances.

// tried Math.round first but that method rounds to the nearest integer whereas Math.floor always rounds down.