/*function myFunction(){
    console.log("My name is Devaraj");
    console.log(" I have completed Master of computer application");

}
myFunction();


function myFunction1(msg){
    console.log(msg);
    //console.log(" I have completed Master of computer application");

}
myFunction1("I Love JS");


function sum(a , b){
    //console.log(a+b);
    s = a +b;
    return s;
}
let val=sum(5,6);
console.log(val);

//Array function

function sum1(x,y){
    return x+y;
} 

function mul(x,y){
    return x*y;
}

 const  arrowSum=(x,y) => {
   // console.log(x+y);
    return x+y;
};*/

let arr1=[1,2,3,4,5];

arr1.forEach((val1) =>{
    console.log(val1);

});

//map
let nums=[56,58,59];

 let newArray=nums.map((val) =>{
//console.log(val);
  return val * val;

});
console.log(newArray);

//fliter

let arr2 =[1,2,3,4,5,6,7];

 let newArr=arr2.filter((val) =>{
    return val % 2 ===0;
});

console.log(newArr);

//reduce

let arr3 =[1,2,3,4,5,6,7];

const newResu=arr1.reduce((res,curr) =>{
    return res+curr;
});

console.log(newResu);