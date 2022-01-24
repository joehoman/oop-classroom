class Room {
    constructor(name, description) {
        this.name = name
        this.description = description
        this.contents = []
    }
    add(item) {
        this.contents.push(item)
        return this;
    }
    has(item){
        return this.contents.includes(item)
    }
  
}

module.exports = Room
