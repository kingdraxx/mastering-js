/**
 * TASK: Given an array of N integers, write a function
 * that returns the total number of integers divisible by 2
 */

/**
 * Calculates total number of integers divisible by two
 * @param {number[]} A
 */
// A = [1,3,3,3,2,2,1,4,8,8,]
function solution(A) {
  // todo: implement function here
  let integers = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      integers++;
    }
  }

  return integers;
}

function main() {
  const A = new Array(125).fill(0).map((_, i) => i);

  const y = solution(A);
  if (y !== 63)
    console.error("Wrong Answer: Please implement a correct solution");
  else console.log("Correct, Welldone");
}

main();
