var data =  "Hey hello eVeryone";

// split
// var arr = data.split(" ");
// console.log(arr[1].length);

var arr = data.split("e");
console.log(arr);




// hey ev
// 012345
//      -3-2-1    

console.log("plain data - ",data);
console.log("Uppper Case - ",data.toUpperCase());
console.log("Lower Case - ",data.toLowerCase());

// slice
var slicedData = data.slice(2, 6);
console.log("slicedData - ", slicedData);

//str length
console.log(data.length);


// replace
var newData = "JavaScript is amazing, at the same time JavaScript is boring too";
console.log(newData.replace("JavaScript", "JS"));


// includes
console.log(newData.includes("rohan"));

var num = "12345";
console.log(parseInt(num));
console.log(typeof(num))
var num2 = "1234r5";
var updatedNum =parseInt(num2);
console.log(updatedNum);

var num3 = "rk12345";
console.log(parseInt(num3));



var splitEx = "how are you guys doing here?"
console.log(splitEx.split(" ", 4));


// JS Opearors
/**
 * +
 * -
 * *
 * %
 */


/**
 * a+b=
 * a-b=
 * a*b=
 * a%b=
 */


/**
 * Short Hand Operators
 * a+=b   ||     a= a+b       || b = a+b || b+=a
 * a-=b   ||     a= a-b       || b = a+b || b -=a   
 * a*=b   ||     a= a*b       || b = a+b || b*=a
 * a%=b   ||     a= a%b       || b = a+b || b%=a
 */


// Increment and Decrement Operator

// Post Increement 
//  Pre Increment
// a++ => a=a+1
// a-- => a=a-1
var a =2;
console.log("a - ",a--);
console.log(a);


// Comparison Opertor
// ==  (a is equal to b ??) (data comparison)
// = (a=3)
// === (strict comparison => it cross checks data and data type both)
//  >, <, >=, <=
// !=
// !==



var a = "123";
var b = 123;
console.log(a===b);


// 123 == "123"   || t
// 123 === "123"  || f