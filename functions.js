// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
//let name = prompt("Enter a name: ");
let name = prompt("Please enter your name:", "John Doe");
console.log("Hello, " + name + "!")
// calling function
greet(name);