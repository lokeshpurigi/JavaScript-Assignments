// Create a JavaScript Object called User which has 2 properties fName and lName and try printing the lName in Console.

// Example 1:
// Input:
// let names = { fname: "Dillion", lname: "Megida" }


// let names = { fname: "Dillion", lname: "Megida" }
// console.log(names.lname)

// ================================================

// Create a JavaScript constructor function 
// called Animals which accepts 2 input
// parameters (name and specie) as arguments and
// stores them internally. Now create a proto function 
// called sing that prints the name of the animal with 'can sing' returned at the end.

// Example 1:
// Input:
// const dog = new Animals('Pogo', 'Dog')


// Example 1:
// Input:
// const cat = new Animals('Billi', 'Cat')




function Animals(name, specie) {
    this.name = name;
    this.specie = specie;
}


Animals.prototype.sing = function(){
    console.log(`${this.name} can sing`);
}
const dog = new Animals('Pogo', 'Dog')

const dog1 = new Animals("Billi","Cat")
// dog.sing();     // this is 2nd assignment
dog1.sing()       // This 3rd Assignment in opps 