function foo1() {
    return {
        bar: 'hello',
    };
}

// this function line 10 -12 is dead bc it is not connected to the return
function foo2() {
    return;
    {
        bar: 'hello';
    }
}

console.log(foo1());
console.log(foo2());
