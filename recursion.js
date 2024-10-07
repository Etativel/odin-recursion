testBtn = document.querySelector(".test-btn");
testBtn.addEventListener("click", () => {
  // console.log(sumTo(1000));
  // console.log(sumToLoop(1000));
  // console.log(arithmeticSum(1000));
  // console.log(factorial(0));
  // console.log(fibLoop(20));
  // sequence = [];
  // console.log(collatzConjecture(10));
  // console.log(sequence);
  // console.log(fibRecursive(20));
  // let unsortedArray = [2, 4, 1, 5, 4];
  // console.log(mergeS(unsortedArray));

  // let sortedArray = [1, 2, 3, 4, 5, 6, 7];
  // binarySearch(sortedArray, 5);

  const t0 = performance.now();
  console.log(factorial(13));
  const t1 = performance.now();
  console.log("The function took: " + (t1 - t0) + " milliseconds.");
});

function binarySearch(sortedArray, value) {}

let sortedArray = [1, 2, 3, 4, 5, 6, 7];
binarySearch(sortedArray, 5);

function mergeS(array) {
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  let sortedLeft = mergeS(left);
  let sortedRight = mergeS(right);

  return mergeArray(sortedLeft, sortedRight);
}

function mergeArray(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return result
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

function sumTo(n) {
  if (n === 1) return 1;
  return n + sumTo(n - 1);
}

function sumToLoop(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function arithmeticSum(n) {
  return (n * (n + 1)) / 2;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function fibLoop(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let sequence = [0, 1];
  for (let i = 1; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i]);
  }
  return sequence[n];
}

function fibRecursive(n) {
  if (n < 2) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

let sequence = [];

function collatzConjecture(n) {
  if (n === 1) {
    return;
  } else if (n % 2 === 0) {
    let even = n / 2;
    sequence.push(even);
    collatzConjecture(even);
  } else {
    let odd = 3 * n + 1;
    sequence.push(odd);
    collatzConjecture(odd);
  }
  return sequence.length - 1;
}

function mergeSort(array) {
  if (array.length == 0) return array;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle);

  let sortedLeft = mergeSort(leftArray);
  let sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
