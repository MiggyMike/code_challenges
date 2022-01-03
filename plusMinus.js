// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

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

  console.log((posCount / arr.length).toFixed(6));
  console.log((negCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
}

plusMinus([-5, 4, 3, -20, 0, 1]);
