const palindrome = (str) => {
    // make str lowercase
    str = str.toLowerCase();

    // split str by each character
    // reverse the new str
    // join the items back together

    // checker = str;
    // console.log(checker);
    // checker = str.split('');
    // console.log(checker);
    // checker = checker.reverse();
    // console.log(checker);
    // checker = checker.join('');
    // console.log(checker);

    console.log(str === str.split('').reverse().join(''));
};

palindrome('apa');
