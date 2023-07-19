/**
 * Logical Opertors:
 * && (And)
 * || (Or)
 * ! (Not)
 * Condtional Opertor
 */


/**
 * !false => true
 * !true => false
 */


// Conditional Opertor / Ternary Operator
var isEligibleToVote = false;

isEligibleToVote ? console.log("eligible to vote") : console.log("not eligible to vote")

// varName ? True : false


// If-Else Condition
// if(2>3){
//     console.log(true);
// }else{
//     console.log(false);
// }
 var abc = 2>1;

 abc ? console.log("true") :console.log("false");

 let ourObjectHere = {
    name: "java",
    age: 23
 };

 console.log(ourObjectHere);
 console.log("keys within a obj ", Object.keys(ourObjectHere));
 console.log("values within a obj ", Object.values(ourObjectHere));

console.log("before update : ", ourObjectHere.age);
ourObjectHere.age = 25;
console.log("after update : ", ourObjectHere.age)

ourObjectHere.version = "v1.1";

console.log(ourObjectHere);

// char abc = 'a'
// String abcd = "rohan"

/**
 * array methods (map, find, reduce, filter)
 * Promises
 * Async-Await
 * Try & Catch
 */
// heap

var num = "12345";
num = parseInt(num);
console.log(num);
console.log(typeof(num));



// const a = 24;
// console.log("before update value: ",a);
// a= 26;
// console.log("updated value: ", a)





const obj ={
    name: "rohan"
}

console.log(obj.name);
obj.name= "rohan kinnal";
console.log(obj.name);

obj.age = 33;
console.log(obj);


const obj1 ={
    name: "rohan",
    func: () => {
         console.log("hey function");
         return 5;
    }
}

console.log(obj1);
console.log(obj1.name);
console.log(obj1.func());




const obj2={
    name: "rohan",
    age: 16,
    anotherObj:{
        fullName: "rk"
    }
}


console.log(obj2.anotherObj.fullName);

console.log(typeof(false));



// named func
function funcName (clientName, clientHeight){
    console.log("named func", clientName, "height is:", clientHeight);
}
funcName("rohan", 6);

// anymonous func / func expression
 var a =function (clientName, clientHeight){
    console.log("anonymoius func here...", " func", clientName, "height is:", clientHeight)
}
a("rohan", 6);


//arrow func
var abc = () => {
    console.log("arrow func");
}
abc();

const obj4 ={
    name: "rohan",
    func: function() {
         console.log("hey function");
         return 5;
    }
}


