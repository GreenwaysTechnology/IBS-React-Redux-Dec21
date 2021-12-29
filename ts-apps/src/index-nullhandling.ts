
class Person {
    constructor(public id: number = 1, public name: string = "Subramanian") { }
    public calculateAge(): number {
        return 18
    }
}
let person = null
// console.log(`${person.id} ${person.name}`)
//safe navigation operator: if there is null, converted into undefined
console.log(`${person?.id} ${person?.name}`)
//how to show some default value incase of undefined.

console.log(`${person?.id ? person.id : 0} ${person?.name ? person.name : "default"}`)

//fallback message using tenary operator
console.log(`${person?.id ? person.id : 0} ${person?.name ? person.name : "default"}`)

//fallback message using elvish operator

console.log(`${person?.id ?? 0} ${person?.name ?? 'default'}`);
