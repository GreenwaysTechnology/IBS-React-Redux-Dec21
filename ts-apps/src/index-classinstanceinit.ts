//state initalization : way 1 inside class
class Employee {
    //instance variables
    id: number = 1;
    name: string = "Subramaian"
    //instance methods
    calculate(salary: number = 0): number {
        return salary * 100;
    }
}

//state initalization : way 2 outside class
class Customer {
    //instance variables
    id: number = 1;
    name: string = "Subramaian"
    //instance methods
    calculate(invoice: number = 0): number {
        return invoice * 100;
    }
}
let cust = new Customer();
cust.id = 3;
cust.name = "Murugan"
console.log(`${cust.id} ${cust.name} ${cust.calculate(11)}`)


// //state initalization : way via constructors 
// class Person {
//     //instance variables
//     id: number;
//     name: string
//     //constructors
//     constructor(id: number = 1, name: string = "Subramanian") {
//         this.id = id;
//         this.name = name;
//     }
// }
// let person = new Person();

//state initalization : way via constructors 
class Person {
    //instance variables
    id: number;
    name: string
    //constructors
    constructor(id: number = 1, name: string = "Subramanian") {
        this.id = id;
        this.name = name;
    }
}
let person = new Person();

console.log(`${person.id} ${person.name}`)

