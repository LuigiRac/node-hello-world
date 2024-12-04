console.log("Hello World");


// console.log("Hello Boolean");


const newWord = process.argv[2];
// console.log(newWord);
// let parola = "Boolean";
// if (newWord) {
//     parola = newWord;
// }
let parola = process.argv[2] ? process.argv[2] : "Boolean";
console.log(`Hello ${parola}`);
