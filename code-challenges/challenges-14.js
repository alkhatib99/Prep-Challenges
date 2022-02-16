'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    // write your code here
    str=str.trim();
    let lastEmpty=str.lastIndexOf(" ")+1;
    let newStr=str.substring(lastEmpty);
    return newStr;
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    // write your code here

str=str.trim();
let newStr=[]
newStr=str.split(' ');

return newStr[newStr.length-1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    // write your code here
    let arr=str.split(' ');
    arr.splice(arr.indexOf('I'),1,'We');
    if(arr.includes('am'))
    arr.splice(arr.indexOf('am'),1,'are');
    if(arr.includes('was')){
    arr.splice(arr.indexOf('was'),1,'were');
     } let fstr = arr.join(' ');

    return fstr;

}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here
    for (let index = 0; index < arr.length; index++) {
        if(index === 4 )
        arr[index]+=',';

    } 

    let str = arr.join(' ');
    return str;
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
let farr=[];
   let arr= str.split(' ');
   let array=[];
   
   arr.forEach(element => {
       element=element.toString();
    let letter=element.charAt(0);
let count=0;
for (let i = 0; i < element.length; i++) {
if(letter == element.charAt(i))
{
    count++;
}    
else{
    array.push(`${letter}${count}`);
    letter=element.charAt(i);
    count=1;
}
if(i === element.length-1)
{    array.push(`${letter}${count}`);
}

}

farr.push(array.join(''));
array=[];
   }); let fstr = farr.join(' ');
return fstr;
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };