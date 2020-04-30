// 暂时性死区

var tmp = 123;

if (true) {
    tmp = 'abc'; // ReferenceError: Cannot access 'tmp' before initialization
    let tmp;
}