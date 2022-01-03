const fizzbuzz = (num) => {
    for (let i = 0; i <= num; i++) {
        // check if the num is a multiple of 3 AND 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } // check if the numberis a multiple of 3
        else if (i % 3 === 0) {
            console.log('fizz');
        } // chekc if the number is a multiple of 5
        else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
};

fizzbuzz(20);
