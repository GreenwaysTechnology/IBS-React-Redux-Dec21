//union types
function printId(id: number | string ) {
    console.log("Your ID is: " + id);
}
printId(100)
printId("100")
//printId(true)

function printIdV1(id: number | string) {
    //  console.log(id.toUpperCase());
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }
}
printIdV1(100)
printIdV1(123.86789);
printIdV1("abc")

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("subramanian")
welcomePeople(['subu','ram'])
