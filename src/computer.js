class Computer {
    constructor() {
        this.name = 'MacBook Air'
        this.operatingSystem = 'macOS'
        this.processor = '2.3GHz dual-core Intel Core i5'
        this.memory = '8GB'
        this.graphics = 'Intel Iris Plus Graphics 640'
        this.on = false
    }
    power() {
        this.on =! this.on
    }
}

module.exports = Computer
