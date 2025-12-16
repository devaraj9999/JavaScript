// for of loop
/*
let str = "Devaraj";
 let size = 0;
for(let i of str){
    console.log("i=", i);
    size++;
}
console.log("string size =", size);



//for in loop
let student={
    name : "Devaraj",
    age :20,
    cgpa:9.5,

};
for(let i in student){

    console.log("i",i, "value=",student[i]);
}


//pratice even number 1 to 100
 
for (let num=0;num<=100;num++){ 
    if(num%2===0){
console.log(num);
    }

    }*/


    // pratice 2

    let gameNum=17;

   
let userNum = prompt("Guess the number :");
while(userNum !=gameNum){
userNum=prompt("You enter wrong number,guess again!");
}
console.log("congragulation,you correct number",);
