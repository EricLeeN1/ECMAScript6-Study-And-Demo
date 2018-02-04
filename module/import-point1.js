// import('./myModule.js').then(({export1,export2}) => {
//     // ....*
// });
// console.log('上面代码中，export1和export2都是myModule.js的输出接口，可以解构获得。');
// eg1

// import('./myModule.js')
// .then(myModule => {
//   console.log(myModule.default);
// });
// eg2

// import('./myModule.js')
// .then(({default: theDefault}) => {
//   console.log(theDefault);
// });
// eg3

// Promise.all([
//     import('./module1.js'),
//     import('./module2.js'),
//     import('./module3.js'),
//   ])
//   .then(([module1, module2, module3]) => {
//      ···
//   });
// eg4

