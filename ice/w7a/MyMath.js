export function Sum (a, b) {
  return a + b;
}

export function AddList (arr) {
  var total = 0;
  if (typeof arr != 'object' || arr.constructor != Array || arr.length <= 0) {
    return undefined;
  }
  var i;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'number') {
      return undefined;
    }
    total += arr[i];
  }
  return total;
}

export function DivideBy (a, b) {
  if (typeof a != 'number' || typeof b != 'number' || b == 0) {
    return undefined;
  }
  return a / b;
}

export function ContainsString (a, b) {
  return a.includes(b);
}

export function ReSortedNumbers(arr) {
  if (typeof arr != 'object' || arr.constructor != Array || arr.length <= 0) {
    return undefined;
  }
  var i;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'number') {
      return null;
    }
  }
  return arr.concat().sort();
}

