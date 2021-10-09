// Write your code here!
// lab work
// remove main
document.querySelector('main').remove();
// or
//main.remove();

// new header
const newHeader = document.createElement('h1');
newHeader.id = "victory"
document.body.appendChild(newHeader);

// add elements to the DOM with innerHTML
newHeader.innerHTML =  "Hannah is the champion";
newHeader.className = "victory"

// how to set a h1 with a class and id at the same time
document.body.innerHTML = `<h1 class="h1" id="h1">Hello</h1>`