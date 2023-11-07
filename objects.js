 
let school = {
    name: "Secunda Library ",
    location: "Mpumalanga",
    established: "1982",
    20:1000,

    displayInfo: function (){
        console.log(`Welcome to ${school.name} located at 
        ${school.location} which was established on
         ${school.established} having rating of
          ${school[20]}`); //for numbers or Integer we strictly use square brackets
    }



}
school.displayInfo()
console.log([school.name])
console.log(`${school.name}`)
//the $  inside backticks is called identifier
//The ${} inside the backticks is called dynamic callback method
