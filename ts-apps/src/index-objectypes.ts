
//object types : class,interface,type

class Employee {
    id: number;
    name: string;
    salary?: number
}
//interface as type
interface Product {
    id: number;
    name: string;
    qty?: number;
}
interface Settings {
    id: number | string;
    location?: string;
    drive?: string;
    url?: string;
    username?: string;
    password?: string;
}

type Post = {
    id: number
    text: string
}

let emp: Employee = {
    id: 1,
    name: 'Subramanian'
}
let product: Product = {
    id: 1,
    name: 'Phone'
}

let blog: Post = {
    id: 1,
    text: 'React Overview'
}
let webserver: Settings = {
    id: 1,
    location: 'google.com'
}