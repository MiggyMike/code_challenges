function filterEvens(array) {
    const newArray = array.filter((item) => item % 2 === 0);
    return newArray;
}

console.log(filterEvens([1, 2, 3, 4, 5, 6]));
