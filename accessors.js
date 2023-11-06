let global = "Global variables are available everywhere";

function fun(){
    var local = "Local variables are useful inside functions";

return local
} // End of local scope

//Lets call a function called fun()
//fun()

console.log(fun());