// variable naming convintion

const userName = "Adam"
// Variable naming rules: 
//      can start with: "a-z, A-Z, _, $"
//      variables should decriptive
//      in js prefered to be in camelCase = user-name, user_name, userName


// String: skip character \
// comes within "" or '' or ``
// "Hi, I'm Sarah", "Hi, I'm Sam and I'm > 30"
// const txt = "Hi, I'm Sam, and I'm "young""
// const txt2 = 'Hi, I'm Sam, and I'm "young"'
const txt3 = "Hi, I'm Sam, and I'm \"young\""
// console.log(txt3);


// string concatenation
const msg1 = "Hi, Sam"
const msg2 = "Call me back"
// console.log("Hi, Sam"+ ", " +"Call me back" + "!");

// string length
// console.log(msg2.length);

// console.log("start: " + msg2[4] + " end")


// JS built in methods: 
// string methods [slice, replace, replaceAll, toUperCase, toLowerCase, trim, charAt, split, slice, indexOf, lastIndexOf, search, match, matchAll, includes, startWith, endsWith, String[x]]


// template literal
// String Literals with back ticks ``
const exm1 = "start: " + msg2[4] + " end"
const exm2 = `start: msg2[4] end`
const exm3 = `the character at position 0 is: ${msg2[0]}`
// console.log(exm3);


// Numbers and operators "arithmatic" [+, -, *, /, %, ++, -- ] to perform arithmatic on numbers, var, etc
// remainder: %
5 + 7 // 12
12 * 10 // 120
14 / 3 // 4 | 4 * 3 = 12 remain 2
14 % 3 // 2
16 % 4 // 0

// incrment: ++
1 + 1 // 2
let usersCount = 501
// usersCount  + 1 
// usersCount ++ 

// Numbers and operators "assignment" [=, +=, -=, etc ] to assign values to variables
let usersNumber = 700
usersNumber += 108
console.log(usersNumber); //808
usersNumber ++
console.log(usersNumber); // 809

// Numbers and operators "comparison" [==, ===, !=, >, <, >=, ? ] to test for true or false
// == compare value only
// === compare value and type
let a = 5;
let b = 5;
let c = 6;
let d = "6"
// console.log((a == c))
// a = c
// console.log(a);
// console.log((a == c)) 
// console.log(c == d)
// console.log(c === d)


// ! not
// console.log(a != b);
// console.log(a != c)
// console.log(c != d)
// console.log(c !== d)

// bigger/greater than > smaller than<

// console.log(a > b);
// console.log(a < c)
// console.log(c > d)


// bigger/greater than > smaller than<

// console.log(a >= b);
// console.log(a <= c)
// console.log(c >= d)

// ?
console.log(a == b);
console.log(a == b ? true : false)
console.log(a == b ? "equal" : "not equal");
console.log(a == b ? 10 : 12)
console.log(a != b ? "equal" : "not equal")




