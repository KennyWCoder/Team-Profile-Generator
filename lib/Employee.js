class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // getting name from input
    getName () {
        return this.name;
    }

    // getting ID from input
    getId () {
        return this.id;
    }   

    // getting email from input
    getEmail () {
        return this.email;
    }

    // getting employee type 
    getRole () {
        return 'Employee'; 
    }
};

// export
module.exports = Employee; 