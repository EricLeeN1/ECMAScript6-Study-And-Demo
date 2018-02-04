let base = {
    firstName:'eric',
    lastName:'Lee',
    age:25,
    sayName(){
        console.log(this.firstName+' '+this.lastName);
    }
}
// base.sayName();

export default base;