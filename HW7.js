let text = "Name:Chen Le-Rong Age:18 Work:Student Email:roger40227@gmail.com";


let CLR1 = /[0-9]+/g;
let CLR2 = /[a-z]+/g;
let CLR3 = /:([0-9a-zA-Z])+/g;
let CLR4 = /:([0-9a-zA-Z])+/;
let CLR5 = /:([0-9a-zA-Z]+)/;
let CLR6 = /:\d+/g;
let CLR7 = /:\D+/g;
let CLR8 = /\w+@[\w\.]+/g;
let CLR9 = /\w+@[a-z]+\.[a-z.]+/g;

console.log("/[0-9]+/g ==> " + text.match(CLR1));
console.log("/[a-z]+/g ==> " + text.match(CLR2));
console.log("/:([0-9a-zA-Z])+/g ==> " + text.match(CLR3));
console.log("/:([0-9a-zA-Z])+/ ==> " + text.match(CLR4));
console.log("/:([0-9a-zA-Z]+)/ ==> " + text.match(CLR5));
console.log("/:\d+/g ==> " + text.match(CLR6));
console.log("/:\D+/g ==> " + text.match(CLR7));
console.log("/\w+@[\w\.]+/g ==> " + text.match(CLR8));
console.log("\w+@[a-z]+\.[a-z.]+/g ==> " + text.match(CLR9));