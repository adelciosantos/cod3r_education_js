console.log('01)', '1' == 1) // == compare if the 2 operands are equal
console.log('02)', '1' === 1) // === compera if the 2 operands are strictly equal
console.log('03)', '3' != 3) // != compare if the 2 operands are different
console.log('03)', '3' !== 3) // !== compare if the 2 operands are strictly different

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // false, because it is comparing 2 memory addresses
console.log('10)', d1 == d2) // false, because it is comparing 2 memory addresses
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)