testBtn = document.querySelector(".test-btn");
testBtn.addEventListener("click", () => {
  console.log(sumTo(1000));
  console.log(sumToLoop(1000));
  console.log(arithmeticSum(1000));
  console.log(factorial(0));
  console.log(fibLoop(770));
});

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
