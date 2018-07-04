function deepEqual(a, b) {
  if ((typeof a !== 'object' && typeof b !== 'object') || a === null || b === null) {
    return a === b;
  } else {
    let isSame = true;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length === bKeys.length) {
      for (let i = 0; i < aKeys.length; i++) {
        if (!deepEqual(a[aKeys[i]], b[bKeys[i]])) {
          isSame = false;
        }
      }
    }
    return isSame;
  }
} 

// const a = {a: 1, b: 2, c: [3, 4, 5]};
// const b = {a: 1, b: 2, c: [3, 4, 5]};

// console.log(deepEqual(a, b));
