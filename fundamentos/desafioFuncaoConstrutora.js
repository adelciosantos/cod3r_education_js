function criarPessoa(nome) {
    return {
        nome,
        falar: () => console.log(`Meu nome é ${nome}!`)
    }
}

const p1 = new criarPessoa('Adelcio Santos')
p1.falar()