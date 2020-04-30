// 报错
function func() {
    let a = 10;
    var a = 1; // SyntaxError: Identifier 'a' has already been declared
}

// 报错
function func() {
    let a = 10;
    let a = 1; // SyntaxError: Identifier 'a' has already been declared
}