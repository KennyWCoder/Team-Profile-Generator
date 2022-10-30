const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // getting employee role as manager 
    getRole () {
        return "Manager";
    }
}

// export
module.exports = Manager; 