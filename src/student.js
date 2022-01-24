class Student {
    constructor(name, skillLevel){
        this.name = name
        this.skillLevel = skillLevel
        this.assignments = []
    }
    study(){
        if (this.skillLevel < 100) {
            this.skillLevel += 1
        }
        return this;
    }
    doHomework(homework){
        if (homework !== undefined){
            if (homework.skillLevel <= this.skillLevel){
                homework.completed = true;
            }
            else {homework.completed = false;
            }
            if (homework.skillLevel >= 1 && homework.skillLevel <= 100) {
                this.assignments.push(homework);
            }
        }
        if (homework === undefined){
            for (let i = 0; i < this.assignments.length; i++){
                if (this.assignments[i].skillLevel <= this.skillLevel){
                    this.assignments[i].completed = true;
                }
                else {this.assignments[i].completed = false;
                }

            }

        }
    }
}

module.exports = Student
