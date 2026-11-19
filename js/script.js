// operator

let numberOne=200;
let numberTwo=300;


let add=numberOne+numberTwo;
let sub=numberOne-numberTwo;
let multi=numberOne*numberTwo;
let div=numberOne/numberTwo;
let reminder=numberOne%numberTwo;


console.log("addition:",add);
console.log("substraction:",sub);
console.log("multiplication:",multi);
console.log("division:",div);
console.log("reminder:",reminder);

/*
great system

101=invalid number
80-100=A+
70-79=A
60-69=A-
50-59=B
40-39=C
33-40=D
0-32=F

*/ 

let marks=890;


if (marks>=80 && marks <=100) {
   console.log("A+");   
}
 else if (marks>=70 && marks <=79) {
   console.log("A");   
}
 else if (marks>=60 && marks <=69) {
   console.log("A-");   
}
 else if (marks>=50 && marks <=59) {
   console.log("B");   
}
 else if (marks>=40 && marks <=49) {
   console.log("C");   
}
 else if (marks>=33 && marks <=39) {
   console.log("D");   
}

 else if (marks>=101 || marks <=0) {
   console.log("Invalid number");   
}


else{
    console.log("Fail");
    
}

/*
truthy value and falsy value

falsy value: false, 0, -0, on, null, undefind, "", NaN(non a number),
truthy value:upor ar gulo bade baki sob truthy value
*/  

if(null){
console.log("truthy");

}
else{
    console.log("falsy");
    
}

/*
switch statement use kore even and odd ber kora

*/ 
// let nember=9;

// switch (number%2){
// case 0:
// console.log("even");

// break;
// default;
// console.log("odd");
// }

// ternary operator
let age = 18;
console.log(age >=18 ? "people can vote" : "can't vote")

// for loop
let i;
for(i=1; i<10; i++){
    console.log(i, " Bangladesh");
}

// array
let fruits = ["apple", "banana", "orange"];
console.log(fruits );