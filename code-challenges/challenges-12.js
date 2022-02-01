'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
let res=[];    
arr.map(element=>{
if(element %2 !=0 )
res.push(element);
});
return res ; 
    // write your code here
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    let res=[];
    
    arr.map(elem=>{
        let fullName="";
        if(elem.yearsOfExperience > 4  && elem.tech === "JS")
    {let cv={
        fullName:`${elem.firstName} ${elem.LastName}`,
        tech:elem.tech
    };
res.push(cv);    
}
        
    });
    return res;
    // write your code here
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    let res=[];
    let valid =/[aieou]/;
    arr.map(elem=>{
        //let c1 = elem.includes('a'),c2=elem.includes('e'),c3=elem.includes('o'),c4=elem.includes('i'),c5=elem.includes('u');

        //if(!c1 && !c2 && !c3 && !c4 && !c5)
        if(valid.test(elem) ==false)
        res.push(elem);


    });
    return res;
    // write your code here
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    // write your code here

    let res = [];
    arr1.map(elem =>{
if(!arr2.includes(elem))
res.push(elem);      
});

arr2.map(elem => {
    if(!arr1.includes(elem))
    res.push(elem);
});
return res ;


}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

