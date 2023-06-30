function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false; // Return false if no pair with the target sum is found
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10))
console.log(hasTargetSum([22, 19, 4, 6, 30], 25))
console.log(hasTargetSum([1, 2, 5], 4))
/* 
  Write the Big O time complexity of your function here
  o(n**2)
*/

/* 
  Add your pseudocode here.
  create a nested loop.
  if the sum of the pair of values in the nested loop is equal to target return true else return false
*/

/*
  Add written explanation of your solution here
  The outer loop, controlled by the variable i, iterates through each element in the array.
  Inside the outer loop, the inner loop, controlled by the variable j, iterates over the remaining elements in the array starting from the element after the current element indicated by the outer loop (index i + 1).
  For each combination of array[i] and array[j], the code checks if their sum equals the target value using the condition array[i] + array[j] === target.
  If a pair of elements is found that sums up to the target value, the condition in the inner loop evaluates to true. In that case, the function immediately returns true to indicate that a pair with the target sum exists in the array.
  If the inner loop finishes executing without finding a matching pair, it means that no pair with the target sum exists in the array. In that case, the code will reach the return false statement after the loops, and the function returns false to indicate the absence of a matching pair.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
