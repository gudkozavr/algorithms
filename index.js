function partition(arr, low, high) {
  let pivot = arr[high]; // for simple realisation
  let i = low; //last changed element index

  for (let j = low; j < high; j++) {
    //[10, 80, 30, 90, 40] // j = 0 // j =1 // j =2
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      // i = 0, j = 0 // i = 1, j = 1 // i =1, j =2
      // Swap elements
      [arr[i], arr[j]] = [arr[j], arr[i]]; //arr[0] =arr[0],  arr[0] = arr[0] // arr[1] =arr[2],  arr[2] = arr[1]
      // Increment index of smaller element
      i++; // forward right // i = 1 // i = 2
    }
  }
  // Swap pivot to its correct position
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i; // Return the partition index
}
function quickSort(arr, low, high) {
  if (low >= high) return; // base case
  let pivotIndex = partition(arr, low, high); // [10, 30, 40, 90, 80]

  quickSort(arr, low, pivotIndex - 1); // (arr, 0, 2)
  quickSort(arr, pivotIndex + 1, high); // (arr, 4, 5)
}

let arr = [10, 80, 30, 90, 40];
console.log("Original array: " + arr);

quickSort(arr, 0, arr.length - 1); // &&&
console.log("Sorted array: " + arr);
