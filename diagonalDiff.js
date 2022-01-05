// function diagonalDifference(arr) {
//   // Write your code here
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log("loopoing thru each array in the array:", arr[i]);
//     console.log("loop at index of i:", arr[i][i]);
//     console.log(arr[i][i]);
//     // subArr = arr[i][i];
//     // console.log("drilling first loop:", arr[i][i]);
//     // for (let j = 0; j < subArr.length; j++) {
//     //   console.log("second loop:", arr[i][j]);
//     // }
//     console.log(arr[i][i]);
//     console.log(arr[i][arr[i].length -1]);
//   }
//   return res;
// }

function diagonalDifference(arr) {
  // Write your code here
  let a = 0;
  let b = 0;
  for (let i = 0; i < arr.length; i++) {
    subArr = arr[i];
    console.log("drilling first loop:", subArr);
    for (let j = 0; j < subArr.length; j++) {
      // console.log("second loop:", subArr);
      // subArr;
      // console.log("second loop:", subArr[i]);
      // subArr[i];
      // console.log(subArr[arr[i].length - 1 - [i]]);
      subArr[arr[i].length - 1 - [i]];
      // console.log(arr[i][j])
      // console.log(arr[i].length-1-i)
    }
    a += arr[i][i];
    // console.log((a += arr[i][i]));
    b += arr[i][arr[i].length - 1 - i];
    // console.log((b += arr[i][arr[i].length - 1 - i]));
  }
  console.log(Math.abs(a - b));
  return Math.abs(a - b);
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
