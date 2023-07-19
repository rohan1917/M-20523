// Array Methods (map, find, filter, reduce)
var ourNewArr = [1, 23, 5, 623, 1];

// map
var ourUpdatedArr =ourNewArr.map((d, i)=>{
    console.log(d+5, i);
    return d+5;
})

// var ourUpdatedArr =ourNewArr.map((data)=>  data+2);

console.log("map: ",ourUpdatedArr);



// filter
// var ourUpdatedArr2 = ourNewArr.filter((data)=>{
//     return data%2==0;
// })

// var ourUpdatedArr2 = ourNewArr.filter((data)=>data<25)

var ourUpdatedArr2 = ourNewArr.filter((data)=>{
    if(data==21|| data==23 || data==26){
    return data;}
})

console.log("filter: ", ourUpdatedArr2);



// find

var result = ourNewArr.find((data) => data==5);

console.log("find: ",result);



// reduce
var myCart = [100, 350, 450, 650];
var totalPrice = myCart.reduce((data, currentValue)=>{
 return data+currentValue;
},0)

console.log("reduce: ",totalPrice);





var myCartPrice = [
    {
        price: 100,
        quantity: 1
    },
    {
        price: 350,
        quantity: 3
    },
    {
        price: 450,
        quantity: 2
    },
    {
        price: 650,
        quantity: 1
    }
];


// data = 0;
// 0+100*1=100
// 100+350*3=900
// 900+450*2=1800
// 1800+650*1=totalsum
var sumUpPrice = myCartPrice.reduce((data, currentValue)=> data+currentValue.price * currentValue.quantity,0)

console.log("reduced cart appln: ", sumUpPrice);






// Promises:
    // >> Its an obj in js that returns a value which can be hped to recieved 
    // in the futre but not immediatedly and it may or many not be accomplisehd

    // fulfilled
    // rejected
    // pending


    // total duration: 3:00
    // move: 1:32mins
    // lost intenret: 1:32mins
    // 1:40mins



    // var myPromise = new Promise (()=>{})