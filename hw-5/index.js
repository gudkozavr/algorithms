// 1
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [38, 27, 43, 3, 9, 82, 10];
let sortedArr = mergeSort(arr);
console.log(sortedArr);

//2
const fs = require("fs");
const readline = require("readline");
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

async function mergeSortedFiles(fileList, outputFile) {
  const minHeap = new MinPriorityQueue((a, b) => a.value - b.value);
  const readers = [];

  for (const file of fileList) {
    const rl = readline.createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity,
    });

    const iterator = rl[Symbol.asyncIterator]();
    const { value, done } = await iterator.next();

    if (!done) {
      minHeap.enqueue({ value: Number(value), iterator });
    }

    readers.push(rl);
  }

  const writeStream = fs.createWriteStream(outputFile);

  while (!minHeap.isEmpty()) {
    const { value, iterator } = minHeap.dequeue();
    writeStream.write(value + "\n");

    const { value: nextValue, done } = await iterator.next();
    if (!done) {
      minHeap.enqueue({ value: Number(nextValue), iterator });
    }
  }

  writeStream.end();

  readers.forEach((reader) => reader.close());
}

const fileList = ["file1.txt", "file2.txt", "file3.txt"];
mergeSortedFiles(fileList, "merged_output.txt")
  .then(() => console.log("Файлы объединены!"))
  .catch((err) => console.error("Ошибка:", err));
