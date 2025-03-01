//1
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];
  let equal = [];

  for (let num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

let arr = [38, 27, 43, 3, 9, 82, 10];
let sortedArr = quickSort(arr);
console.log(sortedArr);

//2
function quickSortIterative(arr) {
  let stack = [[0, arr.length - 1]];

  while (stack.length > 0) {
    let [left, right] = stack.pop();

    if (left >= right) continue;

    let pivotIndex = partition(arr, left, right);
    stack.push([left, pivotIndex - 1]);
    stack.push([pivotIndex + 1, right]);
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

let arr2 = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSortIterative(arr2));
