//arrays
let list:number[] = [1,2,3,4];

// array of number  :generic Syntax :  Type<?>
let list1:Array<number> = [1,2,3,4];

class Employee {
    id: number;
    name: string;
}
//literal object
let empList: Array<Employee> = [
    { id: 1, name: 'subramanian' }
];

let empList1: Employee[] = [
    { id: 1, name: 'subramanian' }
];