// function getSum(x, y) {
//     let sum = x + y;
//     while (sum > 0) {
//         console.log(sum);
//         sum--;
//     }
// }

// setTimeout(() => {
//     getSum(5, 5), 1000;
// });

// function getSum(x, y) {
//     let sum = x + y;
//     while (sum > 0) {
//         console.log(sum);
//         sum--;
//     }
//     console.log(sum);
//     sum--;
// }

function getSum(x, y) {
    let sum = x + y;
    for (let i = sum; i > 0; i--) {
        setTimeout(() => {
            console.log(i);
            // i--;
        }, 1000 * (sum - i));
    }
}

getSum(5, 8);

// for (x = 10; x >= 0; x--) {
//     setTimeout(() => {
//         console.log(x);
//     }, 1000 / x);
// }
