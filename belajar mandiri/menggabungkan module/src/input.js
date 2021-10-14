import readlineSyn from "readline-sync";

const name = readlineSyn.question("Masukan Nama :");
const age = readlineSyn.questionInt("Masukan umur :");
console.log(`${name} dan ${age} dimasukan`);