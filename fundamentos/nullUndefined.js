let valor // não inicializada
console.log(valor)

valor = null // value absence
console.log(valor)
//console.log(valor.toString()) // Error!!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //avoid to assign undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // without price
console.log(!!produto.preco)
console.log(produto)