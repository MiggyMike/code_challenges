function JadenCase(str) {
    let strSplit = str.split(' ');
    for (let i = 0; i < strSplit.length; i++) {
        strSplit[i] =
            strSplit[i].charAt(0).toUpperCase() + strSplit[i].substring(1);
    }
    return strSplit.join(' ');
}

console.log(JadenCase('hello my name is micahel'));

//code wars set up

// String.prototype.toJadenCase = function () {
//   //... store the split string  in a var
//   let strSplit = this.split(' ');
//   // loop through the str for its length
//   for(let i=0; i<strSplit.length; i++){
//     // in the for loop taking the index of the first letter and capitalizing it
//     // taking the rest of the word from the and adding it together
//     strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].substring(1)
//   }
//   // rejoin the characters/string
//   return strSplit.join(' ')
// };

// TRY WITH .map method
