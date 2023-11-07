const student = {
    // data property attribute
    firstName: 'Isaac', 
    surname: "Makwa",
    age: 18,
    contact: "018338323",
  
    // accessor property(getter)
  get getName (){
    return this.firstName // dot notation with this for singular object
    
  },

  get getDetails(){
    return [this.firstName, this.surname, this.age, this.contact] //Square braces to return multiple values 


  },

  


  // Accessor property(setter)
    set changeName(newName) {
       this.firstName=newName; 
}
}

console.log(student.firstName); //dot notation

console.log(student.getName);

//Call All the information of Isaac
console.log(student.getDetails)

//Assign a new name to first name
student.changeName="Ashante";

console.log(student.firstName);

