
//ARRAY of subjects as elements
const courses = ['Computer Science', 'Software Engineering', 'DataBase','Computer Literacy'];


let i; //counter

let len = courses.length; //call the total number of elements in the array

let space= " "; //Just a space at the beginning

for (i=0; i < len;){
    space += courses[i + ''] // the += allows the elements to be printed followed by next
i++;

}
console.log(space);