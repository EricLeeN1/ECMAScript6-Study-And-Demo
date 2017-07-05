/**
 * Created by Eric on 2017/7/5.
 */
const fs = require('fs');
fs.readFile('../module/a.js',(err,data)=> {
   var p1= new Promise(function (reslove,reject) {
       if (err) {
           reject(err);
       }else {
           reslove(data);
       }
   });
   p1.then(function (value) {
       console.log(value.toString());
   },function (value) {
       console.log(value);
   })
});