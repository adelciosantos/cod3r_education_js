// a factory returns a new object

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}