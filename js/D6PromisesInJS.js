// Promises In JS

// const myPromise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("Success");
//     }, 3000);
    
//     reject("Some Error has occurred :-)");

// });


// myPromise
// .then((s)=>{
//     console.log("success data - ",s);
// })
// .catch((e)=>{
//     console.log("Rejection Msg - ", e);
// })



// console.log("hello 1");
// setTimeout(() => {
//     console.log("hello all dis is from setTimeOut Function!");
// }, 5000);

// console.log("hello 2");
// console.log("hello 3");

// https://thecodest.co/blog/asynchronous-and-single-threaded-javascript-meet-the-event-loop/




// const myPromise = new Promise(function(resolve, reject){
//     // setTimeout(() => {
//     //     resolve("Success");
//     // }, 3000);
//     resolve("succcess");
    
//     reject("Some Error has occurred :-)");

// });


// myPromise
// .then((data)=>{
// let res = "hello, " + data;
// return res;
// })
// .then((data)=>{
//     console.log("success data - ",data);
// })
// .catch((err)=>{
//     console.log("Rejection Msg - ", err);
// })




// Async-Await 
// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("this is been executed succesfully !!")
//     }, 2000);
// });



//  var getCallMyPromise = async ()=>{
//     const res = await myPromise;
//     console.log(res);
// }

// getCallMyPromise();






// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("this has been executed succesfully !!");
//     }, 2000);
//     reject("this has not been executed succesfully !!");
// });



//  var getCallMyPromise = async ()=>{
//  try{
//     const res = await myPromise;
//     console.log("res - ",res);
//  }catch(error){
//     console.error("err - ",error);
//  }
// }

// getCallMyPromise();




let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("this has been executed succesfully !!");
    }, 2000);
    reject("this has not been executed succesfully !!");
});



 var getCallMyPromise = async ()=>{
 try{
    const res = await myPromise;
    console.log("res - ",res);
 }catch(error){
    throw new Error("throwing the exception here");
 }
}

getCallMyPromise();



// responsive screen standards
// Phone <= 600px
// Tablets <=768px
// Laptop <=992px
// Large <=1200px