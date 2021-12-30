
//pure function 
//A. if function receives an input, it should return the same
//pure
function Profile(person) {
    return person;
}
console.log(Profile({ name: 'Subramanian' }))

//Side Effects: if the function tries to change input parameters,localsate
//impure function
function ProfileV1(person) {
    //mutate the name and return
    person.name = 'foo' //side effects
    return person;
}
console.log(ProfileV1({ name: 'Subramanian' }))

//I need to create pure function but i need mutate the data.
//Immutablity: feature through which you can muate state and make the function pure.
//React uses immutablity pattern to change the state, makes the function pure

function ProfileV2(profile, city) {
    //you have to apply immutablity algorthim to make this function pure
    // return {
    //     name: profile.name,
    //     city: city
    // } //return new Object
    // profile.name = 'foo' //side effects
    // return profile;

    //using Object.assign
    // return Object.assign({}, profile, { city })
    //using spread operator
    return { ...profile, city }

}
let profile = { name: 'Subramanian', city: 'Coimbatore' };
//Freeze the object before modification.
Object.freeze(profile);

console.log(ProfileV2(profile, 'Chennai'))

//
//immpure function
// function addItem(items) {
//     //add 
//     items.push(4);
//     return items;
// }
//Pure function version
function addItem(items) {
   // return items.concat(4);
   return [...items, 4];
}
let items = [1, 2, 3];
Object.freeze(items);

console.log('Old Items => ', items);
let newItems = addItem(items)
console.log('new Items => ', newItems);

