const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // getting school from input 
    getSchool () {
        return this.school;
    }

    // getting employee role as intern
    getRole () {
        return "Intern";
    }
}

// export
module.exports = Intern; 