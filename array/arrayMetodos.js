const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove last element of the array
console.log(pilotos)

pilotos.push('Verstappen') // add an element in the last position
console.log(pilotos)

pilotos.shift() // remove first element of the array
console.log(pilotos)

pilotos.unshift('Hamilton') // add an element in the first position
console.log(pilotos)

// splice to add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// splice to remove
pilotos.splice(3, 1, ) // removed Massa of the array
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // create a new array1
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)