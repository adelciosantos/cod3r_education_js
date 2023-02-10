// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const func = { nome: 'Maria', salario: 12545.00}
const clone = { ativo: true, ...func }
console.log(clone)