

class Employee {
    //instance variables
    id: number = 1;
    name: string = "Subramaian"
    //instance methods
    calculate(salary: number = 0): number {
        return salary * 100;
    }
}
let employee = new Employee();
console.log(`${employee.id} ${employee.name} ${employee.calculate(11)}`)

