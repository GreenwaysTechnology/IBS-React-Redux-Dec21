//object destructure.

// function printEmployee(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`City ${employee.address.city}`)

// }
// function printEmployee(employee) {
//     //extract object properties
//     const { id, name, address: { city } } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)

// }

// function printEmployee({ id, name, address: { city } }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)

// }

const printEmployee = ({ id, name, address: { city } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}
let employee = {
    id: 1,
    name: 'subramaian',
    address: {
        city: 'coimbatore'
    }
}
printEmployee(employee);

//Parameter and arg destructure.

let getStock = () => {
    return {
        symbol: 'google',
        price: 100,
        qty: 10
    }
}
stock = getStock();
console.log(stock.symbol, stock.price, stock.qty)

// let { symbol, price, qty } = getStock();
// console.log(symbol, price, qty)


// stock = getStock = (symbol,price,qty) => {
//     return {
//         symbol: symbol,
//         price: price,
//         qty: qty
//     }
// }

// stock = getStock = (symbol, price, qty) => {
//     //if key : localvariable is same, remove one
//     return {
//         symbol,
//         price,
//         qty
//     }
// }

stock = getStock = (symbol, price, qty) => ({
    symbol,
    price,
    qty
})
const { symbol, price, qty } = getStock('google', 100, 1000);
console.log(symbol, price, qty)








