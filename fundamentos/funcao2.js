// Storing a function in a variable
const imprimirSoma = function (a, b) {
    console.log(a + b)}

imprimirSoma(2, 3)

// Storing an arrow function in a variable
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// implicit return
const subtracao = (a, b) => a - b // if only have one code's sentence, don't need of keys
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!!')