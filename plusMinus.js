// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000

// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// INPUT FORMAT

// The first line contains an integer, n , the size of the array.
// The second line contains n space-separated integers that describe arr[n].

// Constraints
// 0 < n <= 100
// -100 <= arr[i] <= 100

//  OUTPUT FORMAT

// Print the following  lines, each to  decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros

function plusMinus(arr) {
  // Write your code here
  // create vars to hold the output for each grouping
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;
  // loop through the array checking each index and adding the count to which it belongs
  for (let i = 0; i < arr.length; i++) {
    // you have to 'arr[i]' to access each indexed position in the array
    if (arr[i] > 0) {
      posCount += 1;
    } else if (arr[i] < 0) {
      negCount += 1;
    } else zeroCount += 1;
  }
  // console.log( 'pos:', posCount, 'neg:', negCount, 'zero:',zeroCount)
  // FN will NOT return anything
  console.log((posCount / arr.length).toFixed(6));
  console.log((negCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
}

plusMinus([-5, 4, 3, -20, 0, 1]);
