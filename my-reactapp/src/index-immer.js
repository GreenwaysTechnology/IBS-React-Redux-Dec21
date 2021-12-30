import produce from "immer";

function updateMobileNo(customer, mobileno) {

    return {
        ...customer,
        contact: {
            ...customer.contact,
            communication: {
                ...customer.contact.communication,
                mobileno: mobileno
            }
        }
    }

}

//
function updateMobileNoImmer(customer, mobileno) {

    return produce(customer, draft => {
        //write logic of changing state : mutable way of writing immutable
        draft.contact.communication.mobileno = mobileno;
    })

}




let customer = {
    id: 1,
    name: 'Subramanian',
    contact: {
        address: {
            city: 'Coimbatore'
        },
        communication: {
            mobileno: '9000000000'
        }
    }
}
console.log(customer);

const updatedCustomer = updateMobileNoImmer(customer, '9003706368')
console.log("Same Object (customer===updatedCustomer) ? =>", customer === updatedCustomer);
console.log(updatedCustomer);