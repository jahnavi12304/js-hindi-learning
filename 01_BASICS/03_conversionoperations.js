/*
let score = 33;
// const {score}= req.body in this when the forntend developer from hs user gave the value of the
//  score we don't know what actually the value is so it requires a check 
console.log( typeof score) 
// currently th score is in number but what if in situation when the score is in string ,
//  or boolean or undefined or null then first of all it requires to be converted 
let valueInNumber = Number(score)
console.log(valueInNumber)
*/
let score = null;
// in this the value is string and we as backend developer require to do task in number
// const {score}= req.body in this when the forntend developer from hs user gave the value of the
//  score we don't know what actually the value is so it requires a check 
console.log( typeof score) 
// currently th score is in number but what if in situation when the score is in string ,
//  or boolean or undefined or null then first of all it requires to be converted 
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
/*
@jahnavi12304 ➜ /workspaces/js-hindi-learning (main) $ node 01_BASICS/03_conversionoperations
string
number
NaN
@jahnavi12304 ➜ /workspaces/js-hindi-learning (main) $ node 01_BASICS/03_conversionoperations
undefined
number
NaN
@jahnavi12304 ➜ /workspaces/js-hindi-learning (main) $ node 01_BASICS/03_conversionoperations
boolean
number
1
@jahnavi12304 ➜ /workspaces/js-hindi-learning (main) $ node 01_BASICS/03_conversionoperations
object
number
0
@jahnavi12304 ➜ /workspaces/js-hindi-learning (main) $ */

// during conversion in boolean also when it is 1 it is true and 0 it is false empty sting is false and 
//string consisting some value is true 
