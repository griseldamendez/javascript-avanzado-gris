const number2text = required('number2texto');

let textoIngles = number2text(222);
let textEspañol = number2text(1234567, 'es');

console.log(textoIngles);
console.log(textEspañol);