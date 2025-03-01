function findKthElement(arr1, arr2, k) {
  let i = 0,
    j = 0;
  let merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }

    if (merged.length === k) {
      return merged[k - 1];
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
    if (merged.length === k) {
      return merged[k - 1];
    }
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
    if (merged.length === k) {
      return merged[k - 1];
    }
  }

  return -1;
}

const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(findKthElement(arr1, arr2, k));
