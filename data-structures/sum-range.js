function range(start, end, step = start < end ? 1 : -1) {
  const range = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

function sum(arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum;
}
