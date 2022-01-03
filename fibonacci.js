const fibonacci = (num) => {
    // stroe the finonacci seqeunce being generated inside an array
    // and initiallize the array with the first two numbers of the sequence
    const result = [0, 1];
    // const result = [5, 15];

    for (let i = 2; i <= num; i++) {
        // push the sum of two numbers
        // proceeding the position of i in the result array
        // at the end of the result
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
        // console.log(result);
    }
    // return the last value in the result array
    // console.log(result);
    console.log(result[num]);
};

fibonacci(8);
