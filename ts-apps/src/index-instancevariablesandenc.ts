class Person {
    // //instance variables
    // public id: number;
    // public name: string
    //constructors
    // constructor(public id: number = 1, public name: string = "Subramanian") {
    //     this.id = id;
    //     this.name = name;
    // }
    constructor(public id: number = 1, public name: string = "Subramanian") {   }
    public calculateAge(): number {
        return 18
    }
}
let person = new Person();

console.log(`${person.id} ${person.name}`)