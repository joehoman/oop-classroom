class Marker {
    constructor(size, color, remainingInk){
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;
    }
    write(input) {
        let array = input.split('')
        let string = ''
        let ink = this.remainingInk;
        for (let i = 0; i < array.length; i++) {
            if (ink > 0 || array[i] === ' ') {
                string += array[i];
            }
            if (array[i] !== ' '){
                ink -= 1;
            }
        }
        
        this.remainingInk = ink;
        return string;
    }

  
}

module.exports = Marker
