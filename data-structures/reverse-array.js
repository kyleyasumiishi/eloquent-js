function reverseArray(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  console.assert(reversedArray.length === array.length, "Lengths of reversedArray and input array must be equal");
  for (let i = 0; i < reversedArray.length; i++) {
    array[i] = reversedArray[i];
  }
}
