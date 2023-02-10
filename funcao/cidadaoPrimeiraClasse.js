// Function in JS é First-Class Object (Citizens)
//Higher Order Function

// do with literaly form
function fun1() { }

// store in a variable
const fun2 = function () { }

// store in a array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// store in a attribute of an object
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// pass function as parameter
function run(fun) {
    fun()
}

const fun3 = function() { console.log('Executando....') }

run(fun3)

// a function can return a function
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
