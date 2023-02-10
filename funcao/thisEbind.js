const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // paradigm conflict: functional and OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind the "this" in the object pessoa
falarDePessoa()