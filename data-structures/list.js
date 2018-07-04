function arrayToList(array) {
  let list; 
  for (let i = array.length - 1; i >= 0; i--) {
    let value = array[i];
    let rest = i < array.length - 1 ? list : null;
    list = {value, rest};
  }  
  return list;
}

function listToArray(list) {
  let array = [];
  array.push(list.value);
  if (list.rest !== null) {
    array = array.concat(listToArray(list.rest));
  }
  return array;
}

function prepend(element, list) {
  const copy = list.slice();
  copy.unshift(element);
  return copy;
}

function nth(list, number) {
  return list.indexOf(number) > -1 ? list.indexOf(number) : undefined;
}

function nthRecursive(list, number) {
  if (list[0] === number) {
    return 0;
  } else if (list.length === 1) {
    return undefined;
  } else {
    const indexOf = 1 + nthRecursive(list.slice(1,), number);
    return isNaN(indexOf) ? undefined : indexOf;
  }
}


/////////////////////////////////////////////////////// 

// Tests

// arrayToList Test:
// console.log(arrayToList([1, 2, 3]));

// listToArray Test:
// let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
// console.log(listToArray(list));

// prepent Test:
// console.log(prepend(0, [1, 2, 3]));

// nth Test:
// console.log(nth([1, 2, 3], 2));

// nthRecursive Test: 
// console.log(nthRecursive([1, 2, 3, 3], 3));
