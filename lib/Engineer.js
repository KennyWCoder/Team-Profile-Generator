const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);
        this.github = github; 
    }

    // getting github info from input 
    getGithub () {
        return this.github;
    }

     // getting employee role as engineer
    getRole () {
        return "Engineer";
    }
}

// export 
module.exports = Engineer; 