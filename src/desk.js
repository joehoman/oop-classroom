
class Desk {
    constructor(length, width, height, isWhiteboard) {
        this.length = length
        this.width = width
        this.height = height
        this.isWhiteboard = isWhiteboard
        this.content = ''
        
    }
    write(input) {
         this.content += input
    }
    wipe() {
        if (this.isWhiteboard === true){
            this.content = ''
        }
    }
  
}

module.exports = Desk


// 1) should have a property of `content` which defaults to an empty string
// .write()
//   2) should add the inputted string to the `content` property
//   3) should allow for multiple writes
// .wipe()
//   4) should clear the `content` if `isWhiteboard` is set to true
//   5) should *not* clear the `content` if `isWhiteboard` is set to false