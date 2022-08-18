function hasTargetSum(array, target) {
  // Write your algorithm here
  const integer = parseInt(target, 10);

  for (let i = 0; i < array.length; i++) {
    let left = integer - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === left) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Big O Time Complexity: O(n^2) because of the double iteration of the array.
*/

/* 
  Add your pseudocode here
  Have function take in two arguments: the array and the target *integer*
  Iterate through the array to obtain the first variable of the pair.
  Withing the first iteration, iterate through the array again.
  Return true if first and second variable add up to the integer AND do not equal each other.
*/

/*
  The first part of the function is to make sure the second argument for the function is an integer.
  The next would be to be able to iterate through the array twice because each value of the array must be used as the first and second value for the sum. I iterated through the array twice because while we go through the iteration the first time for the first value, we still need to get the second value from the second iteration.
  I also made sure to take into account any doubles that are included in the array.
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 5, 8 , 10], 4));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 2, 6, 8, 10, 12, 11], 9));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 2, 2, 6, 8, 10, 12, 11], 4));
}

module.exports = hasTargetSum;
