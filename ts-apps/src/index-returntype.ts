//functiion

function sayGreet() {
    console.log('hello')
}
sayGreet();
//parameters and args

// function add(a,b){
//   return a + b;
// }
//default arg
// function add(a:number=0, b:number=0) {
//     return a + b;
// }

//optional parameters
function add(a?: number, b?: number) {
    return a + b;
}
console.log(add(10, 10))
// console.log(add("test", 10))
console.log(add())

//function literals
let multiply = function (a: number = 0, b: number = 0) {
    return a * b;
};
console.log(multiply(10, 10))

//arrow functions
multiply = (a: number = 0, b: number = 0) => {
    return a * b;
};
console.log(multiply(10, 10))

multiply = (a: number = 0, b: number = 0) => a * b;
console.log(multiply(10, 10))
//////////////////////////////////////////////////////////////////////////////////////

// function getValue (){
//     return 100
// }
// function getValue (){
//     return "test"
// }
function getValue(): number {
    return 12
}
console.log(getValue())

function doStuff(): void {
    console.log('no return')

}
doStuff();

multiply = (a: number = 0, b: number = 0): number => a * b;
console.log(multiply(10, 10))