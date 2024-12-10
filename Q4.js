//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

var num1 = 20 //The age value can be changed❌
var num1 = 55

 let num = 20
// let num = 35  //The value cannot be changed✅

const number = 20
// const number = 35  //The value cannot be changed, It is fixed✅


// function 
function square(a) {
    return a * a
}
console.log( square(4));

//arrow function✅✅
const square = a => { return a*a }

//template string
const student = "Zahra"
const greet = `Hello ${student} wellcome to APS`
console.log(greet);

//destructuring
const job = ["Doctor", "Teacher", "Programmer"]
const [first, second, third] = job
console.log(first, second, third);

const person = {name: "Sara", lastName: "Sasani", year: 189}
const{name:fName, lastName:lName, year:age,} = person
console.log(fName, age);
