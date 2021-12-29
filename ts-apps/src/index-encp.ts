//all instance variables and methods are by default is public. we dont need to use public keyword

class Person {
    //instance variables
    public id: number;
    public name: string
    //constructors
    constructor(id: number = 1, name: string = "Subramanian") {
        this.id = id;
        this.name = name;
    }
    public calculateAge(): number {
        return 18
    }
}
let person = new Person();

console.log(`${person.id} ${person.name}`)
//private

class AuthService {
    private userName: string = "foo";
    private password: string = "Abc34%@23";

    public getAuthInfo(): string {
        return this.buildSecret();
    }
    private buildSecret() {
        return this.userName + this.password
    }
}
let authService = new AuthService();

// console.log(authService.userName)
console.log(authService.getAuthInfo())

