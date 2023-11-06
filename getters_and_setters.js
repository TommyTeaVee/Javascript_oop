const student = {
    // data property
    firstName: 'Thendo',
   // surname: "Makherana"
    // accessor property(getter)
  get getName (){
    return this.firstName;
  },


  // Accessor property(setter)
    set changeName(newName) {
       this.firstName=newName; 
}
}

console.log(student.firstName);

console.log(student.getName);

//Assign a new name to first name
student.changeName="Ashante";

console.log(student.firstName);

