//dom element creation using plain javascript.

function createElement() {
    let Heading = document.createElement('h1')
    console.dir(Heading);
    Heading.innerHTML = 'React!!!'
    Heading.style.color = 'red';
    Heading.style.backgroundColor='yellow';
    //we need to add this h1 on existing tree
    document.getElementById('root').appendChild(Heading)
}
createElement();