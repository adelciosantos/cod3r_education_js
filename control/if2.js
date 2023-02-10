function teste1(num) {
    if(num > 7)
        console.log(num)
    console.log('Final') // always show, because it is out of the "if"
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}