// Closure is the scope created when a function is declared
// This scope allows the function to acess and manipulate external variables in the function

// lexicon context

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())