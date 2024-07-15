//1.fizzBuzz
let i=0;
for(i=1;i<=100;i++){

    if((i%3 ==0) && (i%5 ==0)){
        console.log(" FizzBuzz");
    }
    else if(i%3 ==0){
        console.log(" fizz");
    }
    else if(i%5==0){
        console.log(" Buzz");
    }
    else{
        console.log(i);
    }
    
}
//2.palindrome
let str ="Anand";
let rev ="";
console.log(str)
for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i];
    }
if(str==rev){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}

//3.Array Largest Number

let arr = [10,20,30,300,40]
let res = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>res){
        res = arr[i];
    }
    }
console.log(arr);
console.log(res);

//4.number of occurrences as value of string

let str1 = "Anand";
let str2 = "n";
let count = 0;
function num(){
for(let i=0; i<str1.length; i++){
    if(str1[i] === str2){
        count++;
    }
}
console.log(count);
}
 console.log(str1);
 console.log("number of occurance "+str2);
console.log(num());

//5.longext word in the string

let str3 = "Good morning";
let words = str3.split(" ");
let maxLength = 0;
let longestWord = "";
for(let i=0; i<words.length; i++){
    if(words[i].length > maxLength){
        maxLength = words[i].length;
        longestWord = words[i];
    }
}
console.log(longestWord);
//6.factorial

let numb = 5;
let factorial = 1;
for(let i=1; i<=numb; i++){
    factorial =factorial*i;
}
console.log(factorial);
//7.celsius to fahrenheit

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("25 celsius into fahrenheit "+fahrenheit);