let courses = ["React", "Angular 2","Javascript", "HTML"]; // Pre-defined array

courses.length=5;
courses[3]= "Typescript";

courses[5]="Flutter";

console.log("Courses available: "+ courses);
 // If we want our  array to return object
 console.log(typeof courses)

 // If we want our array to return strictly as array
 console.log("Is this  an array method? ", courses instanceof Array);
console.log("Is this still an array method? ", Array.isArray(courses));

courses.push(["Vue", "Svelte", "C/C++", "Python", "C#"])
console.log("new semester courses: " + courses);

//console.log(courses.toString())

let faculty= courses.toString();
console.log(faculty);

let learners = new Array(3); // Undefined array

learners[0]=1;
learners[1]=2;
learners[2]=3;
learners[3]=4;
learners[4]=5;




console.log("No of learners: "+ learners)