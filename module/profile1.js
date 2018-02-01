var firstName = 'Eric';
var lastName = 'Lee';
var country = 'China';
function v1(){
    console.log('v1');
}
function v2() {
    console.log('v2');
}
export {
    firstName,
    lastName,
    country
};
export function multiply(x, y) {
    return x * y;
}

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
}