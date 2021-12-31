import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';

let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995"
    },
    {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000"
    },
    {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003"
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997"
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/2998"
    }
];
export function getInvoices() {
    return invoices;
}

export function Expenses() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Expenses</h2>
        </main>
    );
}
export function Invoices() {
    let invoices = getInvoices();
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                {invoices.map(invoice => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
export function Home() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Home</h2>
        </main>
    );
}
const App = () => {
    return <div>
        <BrowserRouter>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} />
            </Routes>
            <Outlet />
        </BrowserRouter>
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));