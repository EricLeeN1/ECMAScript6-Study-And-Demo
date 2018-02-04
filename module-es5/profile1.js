'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multiply = multiply;
var firstName = 'Eric';
var lastName = 'Lee';
var country = 'China';
function v1() {
    console.log('v1');
}
function v2() {
    console.log('v2');
}
exports.firstName = firstName;
exports.lastName = lastName;
exports.country = country;
function multiply(x, y) {
    return x * y;
}

exports.streamV1 = v1;
exports.streamV2 = v2;
exports.streamLatestVersion = v2;
//# sourceMappingURL=profile1.js.map
