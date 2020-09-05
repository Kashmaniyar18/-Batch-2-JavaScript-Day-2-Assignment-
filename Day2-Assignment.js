// Q1. Program to find the particular character in string .

let str1 = "letsupgrade";
console.log (str1); // we first print the string 
console.log("The charatcter accessed from the string 'letsupgrade' is "  +str1[5]); // we access the 5th character of string that is "p"

//Q2. Program to convert minutes into seconds .
// (We need to multiply the value by 60 because each minute consists of 60 seconds.)

let minutes = 30 ;
let sec = minutes * 60;
console.log("30 Minutes into Seconds is " +sec);

//Q3. Prgram to search an element in a an array of strings .

let fruits  =  ["mango","apple","pineapple","blueberry","raspberry","banana"];
let len = fruits.length;
console.log("Lenght of array Fruits is :" + len);
console.log(fruits[2] );


//Q5. Program to print the array in reverse order .

let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
//console.log(numbers[0,9]);
console.log(numbers.reverse());

// Q4. Program to display elements having only a in the term of array

let array =["Apps","Apple","Animals","Fruits","Banana","Cat","Dog"];
console.log(array.includes(a));

