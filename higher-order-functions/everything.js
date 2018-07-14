function every(array, test) {
  let every = true;
  array.forEach(element => {
    if (!test(element)) every = false;
  });
  return every;
} 

// To check if some are true, you can also check if all are false. If none are false, then some are true. This is De Morgan's Law.
function every2(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));