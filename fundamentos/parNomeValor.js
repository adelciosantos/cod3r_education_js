const saudacao = 'Opa' //lexicon context 1

function exec() {
    const saudacao = 'Falaaa' //lexicon context 2, same variable name of line 1, but, within a function
    return saudacao
}

//Objects are aligned groups of name/value pairs
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)